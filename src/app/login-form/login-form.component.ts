import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm:FormGroup;
  constructor(public fb:FormBuilder, public router:Router) { }
  
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    })
  }
  getLinkedIn()
  {
        console.log(this.loginForm.controls['username'].value)
        console.log(this.loginForm.controls['password'].value)

        if(this.loginForm.controls['username'].value==="se" && this.loginForm.controls['password'].value==="se")
        {
          console.log('in sales executive')
          //localStorage.setItem('role','Admin')
          //this.router.navigateByUrl('role/Admin')
        }

        if(this.loginForm.controls['username'].value==="oe" && this.loginForm.controls['password'].value==="oe")
        {
          console.log('in operational executive')
         // localStorage.setItem('role','User')
         // this.router.navigateByUrl('role/User')
        }

  }

}
