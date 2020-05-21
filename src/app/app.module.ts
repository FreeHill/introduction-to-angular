import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon'


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { MyDirectiveDirective } from './custom-directives/my-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorldTimeComponent } from './components/world-time/world-time.component';
import { CardComponent } from './components/card/card.component';
import { DateService } from './services/date.service';
import { CryptoService } from './services/crypto.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    MyDirectiveDirective,
    WorldTimeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [DateService, CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
