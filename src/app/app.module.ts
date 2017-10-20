import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { appRoute } from './app.route';
import {TodoDataService} from './todo-data.service';
import {TodoDetailResolver} from './resolvers/todo-detail.resolver';

import { AppComponent } from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { AboutComponent } from './about/about.component';
import { RootComponent } from './root/root.component';
import { TodoDetailComponent } from './todo-list/todo-detail/todo-detail.component';
import {TodoListResolver} from './resolvers/todo-list.resolver';
import { FirstBigLetterPipe } from './pipes/first-big-letter.pipe';
import { WordCountLimitPipe } from './pipes/word-count-limit.pipe';
import { CommentLogPipe } from './pipes/comment-log.pipe';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    AboutComponent,
    RootComponent,
    TodoDetailComponent,
    FirstBigLetterPipe,
    WordCountLimitPipe,
    CommentLogPipe,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoute,
      { enableTracing: false }
    ),
    HttpModule
  ],
  providers: [
    TodoDataService,
    TodoDetailResolver,
    TodoListResolver
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
