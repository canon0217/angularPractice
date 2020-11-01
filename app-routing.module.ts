import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ProgramComponent } from './program/program.component';
import { ElectronicKitComponent } from './electronic-kit/electronic-kit.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TodoComponent } from './todo/todo.component';
import { AngularComponent } from './angular/angular.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'electronic-kit', component: ElectronicKitComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}