import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable({ providedIn: 'root' })
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

  getArticle(id: number): Observable<Article> {
    return of(ARTICLES.find(article => article.id === id));
  }

  hello (name:string) {
    return "Hello, "+ name+"!! (by using Service)";
  }
}