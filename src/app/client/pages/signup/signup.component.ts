import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenServiceService} from '../../services/authen/authen-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage;
  userForm: FormArray = this.fb.array([]);
  //userForm: FormGroup;
  constructor(private fb: FormBuilder,private service:AuthenServiceService, private router:Router ) { }
  
  ngOnInit(): void {
    this.addUserForm();
  }

  addUserForm(){
    this.userForm.push(this.fb.group({
      id:[0],
      name:[''],
      email:[''],
      username:[''],
      password:['']

    }))
  }
  checkError = false; 

  onSubmit(form:FormGroup){
    alert("success"+JSON.stringify(form.value));
    this.service.checkUserName(form.value).subscribe((res : any) => {
      if(!res){
      this.service.signup(form.value).subscribe(
      (res : any) => {
        alert("success");
        this.router.navigate(['/login']);
      },
      err => {
        alert("lỗi"+JSON.stringify(err));
        this.errorMessage = err;
      setTimeout(() => this.errorMessage = '', 2000);
      }
    )}else alert("tài khoản đã được đăng ký");
  }, err => {alert("lỗi"+JSON.stringify(err));})
  }
  
  values = '';

  // onKey(event: any) { // without type info
  //   alert(event.target.value);
  //   var json = {"username":event.target.value };
  //   this.service.checkUserName(json).subscribe(
  //     (res : any) => {
  //       alert("sc"+JSON.stringify(res));
  //     },
  //     err => {
  //       alert("lỗi"+JSON.stringify(err));
       
  //     }
  //   );
  // }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    return  {
      'form-submit-error': this.checkError,
      'login-input': !this.checkError
    };
  }
}
