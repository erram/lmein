import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'app/model/book.model';

@Component({
  moduleId: module.id,
  selector: 'ngb-books-list',
  templateUrl: './list.component.html',
  styleUrls: ['list.component.scss']
})
export class BooksListComponent implements OnInit {
  @Input() books: Book[];
  constructor() { }

  ngOnInit() {
  }

}
