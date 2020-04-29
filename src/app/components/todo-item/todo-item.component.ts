import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
// make the "todo" a callable input in other components.
//"todo" is typed as "Todo" in Todos.ts in the models file
  @Input() todo:Todo;
// Emit Todo to its encapsulating component. ie todos.component
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();


  constructor(private  todoService:TodoService) { }

  ngOnInit(): void {
  }

  //Set Dynamic classes. This is to achieve dynamic class binding
  //in todo-item.component.html
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  // event functions
  onToggle(todo){
    //Toggle todo.completed to either true or false
    // this further determines whether 'is-complete' will be applied
    // to todo-item.component.html or not
    todo.completed = !todo.completed

    // toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo))
  }

  onDelete(todo){
   this.deleteTodo.emit(todo)
  }
}
