import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBooksComponent } from './pages/search/search.component';
import { BookDetailPageComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: SearchBooksComponent
  },
  {
    path: 'book/:id',
    component: BookDetailPageComponent
  }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
