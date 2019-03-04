import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './../../custom-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  wrongCred: boolean = false;
  submitted : boolean = false;
  welcome : boolean = false;


  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern(this.emailRegEx)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    cpassword: new FormControl('',[Validators.required]),
  },
    CustomValidators.MatchPassword
  );

  constructor() { }

  ngOnInit() {

  }
  get f() { return this.loginForm.controls; }

  onSubmit() : void {
    if(this.loginForm.value.email == 'admin@mail.com' && this.loginForm.value.password == 'admin12345' && this.loginForm.valid){
      this.welcome = true;
    }else {
      this.wrongCred = true;
    }
    this.submitted = true;
  }
}
