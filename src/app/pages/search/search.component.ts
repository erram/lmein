import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Book } from 'app/model/book.model';
import { BookService } from '../../service/api.service';

@Component({
  moduleId: module.id,
  selector: 'ngb-search-books',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})
export class SearchBooksComponent implements OnInit {
  searchText = 'Frontend';
  $searchTextChanged: Subject<string> = new Subject<string>();
  books: Book[] = [];
  searching = false;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.initSearchTextHandler();
  }

  initSearchTextHandler() {
    this.$searchTextChanged
      .debounceTime(300) // wait 300ms mielőtt emittel
      .distinctUntilChanged() // csak ha válltozott az érték
      .subscribe(searchTextVal => {
        this.searchBooks(this.searchText);
      });
    this.$searchTextChanged.next(this.searchText);
  }

  onSearchTextChange(newSearchVal: string) {
    if (newSearchVal === '') {
      this.searchText = '';
      this.books = [];
    }else {
      this.$searchTextChanged.next(newSearchVal);
    }
  }

  searchBooks(queryText: string) {
    this.searching = true;
    if (queryText) {
      this.bookService.searchBooks(queryText)
        .subscribe((booksList: Book[]) => {
          console.log(booksList);
          this.searching = false;
          this.books = booksList;
        })
    }else {
      setTimeout(() => {
        this.books = [];
        this.searchText = '';
        this.searching = false;
      }, 500);
    }
  }

}
