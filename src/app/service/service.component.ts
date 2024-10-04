import { Component,OnInit } from '@angular/core';
import {ReactiveFormsModule,FormBuilder, FormGroup, Form, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlaceholderserviceService } from '../../services/placeholderservice.service';
@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterOutlet],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit {
  postForm: FormGroup= new FormGroup('');
  constructor(private formBuilder:FormBuilder,
    private callapi:PlaceholderserviceService
  ){}
ngOnInit(): void {
  this.postForm = this.formBuilder.group({
    id:[0],title:['',Validators.required],body:['',Validators.required],userId:[0]
  });
}
onSubmit(){
  this.postForm.value["userId"]="111";
  console.log("Called From Local Db");
  var res = this.callapi.getLocalPosts();
 console.table(res);
}
}
