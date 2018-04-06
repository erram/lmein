import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'app/model/book.model';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ngb-book-details',
  templateUrl: './details.component.html',
  styleUrls: ['details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail() {
    return this.book.volumeInfo.imageLinks
      && this.book.volumeInfo.imageLinks.smallThumbnail;
  }

  addBook(book) {
    if(JSON.parse(localStorage.getItem('session'))) {
      var b = JSON.parse(localStorage.getItem('session')));
      b.push(book.id)
      localStorage.clear();
      localStorage.setItem('session', JSON.stringify(b);
    } else {
      var a = [];
      a.push(book.id);
      localStorage.setItem('session', JSON.stringify(a));
    }
  }

  removeBook(book) {
    var b = JSON.parse(localStorage.getItem('session')));
    for(var i = b.length; i--;) {
      // Kiszedés
      if ( b[i] === book.id) b.splice(i, 1);
    }
    localStorage.clear();
    localStorage.setItem('session', JSON.stringify(b);
  }

  inCollection(book) {
    var b = JSON.parse(localStorage.getItem('session')));
    if(b.includes(book.id)){
      return true
    }
    return false
  }


}
