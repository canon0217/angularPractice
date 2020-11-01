import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesComponent } from './articles/articles.component';
import { HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';

import { AppRoutingModule } from './app-routing.module';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ProgramComponent } from './program/program.component';
import { ElectronicKitComponent } from './electronic-kit/electronic-kit.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TodoComponent } from './todo/todo.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HammerModule, 
    IgxDatePickerModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    KnowledgeComponent,
    ArticlesComponent,
    ArticleDetailComponent,
    KnowledgeComponent,
    ProgramComponent,
    ElectronicKitComponent,
    PresentationComponent,
    TodoComponent,
    AngularComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }