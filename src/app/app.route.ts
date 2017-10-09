import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {TodoDetailComponent} from './todo-list/todo-detail/todo-detail.component';
import {TodoDetailResolver} from './resolvers/todo-detail.resolver';
import {TodoListResolver} from './resolvers/todo-list.resolver';

export const appRoute: Routes = [
  { path: '', redirectTo: '/guide', pathMatch: 'full' },
  { path: 'guide', component: AppComponent, resolve: { todo_list: TodoListResolver} },
  { path: 'about', component: AboutComponent },
  { path: 'todo-detail/:todo_id', component: TodoDetailComponent, resolve: {todo_item: TodoDetailResolver} }
];
