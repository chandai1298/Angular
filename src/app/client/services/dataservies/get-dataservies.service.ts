import { Injectable } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetDataserviesService {

  
  readonly rootUrl = 'https://localhost:44376/Home/';

  constructor(private fb: FormBuilder,private http:HttpClient,private router: Router) { }

  partForm: FormArray = this.fb.array([]);
  //userForm: FormGroup;
  addUserForm() {
    this.partForm.push(
      this.fb.group({
        id_part: [1],
        id: [4],
        id_lession: [13] 
      })
    );
  }
  output: JSON;
  obj: any = {"id_part": "1", "id": "4", "id_lession": "13"};
  getListQuestion(){
    return this.http.post('https://localhost:44376/Home/getQuestionPart',this.obj);
  }
}
