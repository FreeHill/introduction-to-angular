import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { WorldTimeComponent } from './components/world-time/world-time.component'
import { TodosComponent } from './components/todos/todos.component'

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login",component: LoginComponent},
  {path: "world-time", component: WorldTimeComponent},
  {path: "todos", component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
