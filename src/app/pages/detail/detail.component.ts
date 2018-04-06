import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/api.service';
import { Book } from 'app/model/book.model';

@Component({
  moduleId: module.id,
  selector: 'ngb-book-detail-page',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})
export class BookDetailPageComponent implements OnInit {
  book: Book;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.fetchBook();
  }

  fetchBook () {
    this.route.params.subscribe((params) => {
      this.bookService.getBookById(params.id)
        .subscribe((book) => {
          this.book = book
          console.log(book)
        })
    })
  }

}
