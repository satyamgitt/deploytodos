import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Model/todo';
import { TodoService } from 'src/app/services/todo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { fromEventPattern } from 'rxjs';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
    
  }


  id = new FormControl("", [

    Validators.required,

    Validators.minLength(1)

  ])

  name = new FormControl("", [

    Validators.required,

  ])
  desc = new FormControl("", [

    Validators.required,

  ])
  date = new FormControl("", [

    Validators.required,

  ]);

  todoForm: any = new FormGroup({
    id!: this.id,
    name!: this.name,
    desc!: this.desc,
    date!: this.date
    
  })

  // FormAdd = new FormGroup(
  //   {
  //   id: new FormControl( null,[Validators.required,Validators.minLength(2)]),
  //   Name: new FormControl('',[Validators.required]),
  //   Description: new FormControl('',[Validators.required]),
  //   date: new FormControl('',[Validators.required]),
  // })

  loginUser() {
    
    if (this.todoForm.status === 'INVALID') {
      console.log('fail');

      return;
    }

    // console.log(this.todoservice.todos);
 



    this.todoservice.addTodo(this.todoForm.value);
    this.todoForm.reset({})
  }


  








  // let obj={
  //   id:this.FormAdd.value.id?this.FormAdd.value.id:123,
  //   Name:this.FormAdd.value.Name?this.FormAdd.value.Name:'',
  //   Description:this.FormAdd.value.Description?this.FormAdd.value.Description:'',
  //   date:this.FormAdd.value.date?this.FormAdd.value.date:new Date()
  // };



}
