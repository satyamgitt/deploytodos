import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, of, Subject} from 'rxjs';                       // of api for observable
import { Todo } from '../Model/todo';

@Injectable({
  providedIn: 'root'
})


export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  // read part
  // whenever fetching data through components also observe services using rxjs "of" for  child to child communication
  getTodos() {
    return of(this.todos)
  }


  
  // add part
  addTodo(todo: Todo) {
    // console.log(todo)
    this.todos.push(todo)
  }


  // update
  // ChangeStatus(todo: Todo){
  //   this.todos.map(
  //     (eachSingleTodo)=>{
  //     if(eachSingleTodo.id == todo.id){
  //       todo.isComplete = !todo.isComplete;
  //     }
  //   })
  // }

  // delete


  deleteTodo(todo:Todo,index:number) { 
    this.todos.splice(index, 1)
  }

// public _subject=new Subject<any>();

//  emit<T>(data:T){

//    this._subject.next(data)

//  }
 

//  on<T>():Observable<T>{

//    return this._subject.asObservable();

//   }



  
}






















// public _subject=new Subject<any>();

//   emit<T>(data:T){

//     this._subject.next(data)

//   }
 

//   on<T>():Observable<T>{

//     return this._subject.asObservable();

//   }





  
  // const indexOftodo = this.todos.findIndex((todoarray) => 
    // { todoarray.id === todo.id });