import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  // for sending data child to parent as boolean data{boolean for toggle}
  @Output() event = new EventEmitter<boolean>();


  email = new FormControl("",
    [
      Validators.required,
      Validators.email
    ])

  password = new FormControl("",
    [
      Validators.required,
      Validators.minLength(8)
    ])



  loginForm = new FormGroup({
    email !:this.email,
    password !: this.password
  });

  loginUser() {
    if(this.loginForm.status === "INVALID"){
      return 
    }
    let login = true
    this.event.emit(login)
    // console.warn(this.loginForm.value)
  }

  
  constructor() { }






}
