import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  // todoService is bound to TodoService and typed as private
  // to make it accessible only in this class
  constructor(private todoService:TodoService) {

  }

  // this function will only be executed when app successfully mounts at run time
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  // Find the number of todos
  todosLength(){
    return this.todos.length
  }

  deleteTodo(todo:Todo){
    // delete at ui level
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // delete at server side
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }
}
