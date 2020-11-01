import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: [ './article-detail.component.css' ]
})
export class ArticleDetailComponent implements OnInit {
  article: Article;
  show: number;
  clickMessage = '';
  focusNumber = 0;
  book = { name: ''};
  styleSize = '';
  now: Date;
  title: string;
  message: string;
  message_service: string;
  myControl: FormControl;
  public date: Date = new Date(Date.now());

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) {
    this.show = 3;
    setInterval (
      ()=>{this.now = new Date();}, 1000);
    this.message_service = this.articleService.hello('Taro');
      
  }

  ngOnInit(): void {
    this.getArticle();
    this.title = 'Hello-app';
    this.message = 'FormControlを使う';
    this.myControl = new FormControl ('ok.');
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }

  updateMessage(): void {
    this.clickMessage = "なんで押したの?";
  }

  updateNumber(): void {
    this.focusNumber++;
  }

  today () {
    return new Date().toLocaleString();
  }

}