import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/Model/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos !: Todo[];

  constructor(private todoservices: TodoService) { 
  }

  ngOnInit(): void {
    this.todoservices.getTodos().subscribe((todos: Todo[]) => { 
      // console.log(todos)
      this.todos = todos
     });
  
  }


  


  deleteTodoStatus(todo:Todo,index:number){ 
    this.todoservices.deleteTodo(todo,index)

  

  }

}
