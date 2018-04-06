import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'app/model/book.model';

@Component({
  moduleId: module.id,
  selector: 'ngb-book-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }


  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo && this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail;
    }

    return false;
  }

}
