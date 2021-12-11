import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup ,AbstractControlOptions} from '@angular/forms';
import { CustomvalidationService } from '../customvalidation.service';
import {Registration,Attendance}from '../college.model'
import {CrudService} from '../crud.service'
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup ;
  submitted = false;
  registration= new Registration();
  attendance = new Attendance();
  constructor(private route:Router, private fb: FormBuilder,private service:CrudService,private customValidator: CustomvalidationService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      registerNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],      
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      passwordConfirmation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      department: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'passwordConfirmation') 
      }as AbstractControlOptions
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit()
  {
    console.log(this.registerForm.value);
    this.attendance.Hours='0';
    this.attendance.RegisterNumber= this.registerForm.value.registerNumber;
    this.registration.fullName=this.registerForm.value.fullName;
    this.registration.email=this.registerForm.value.email;
    this.registration.department=this.registerForm.value.department;
    this.registration.password=this.registerForm.value.password;
    this.registration.phoneNumber=this.registerForm.value.phoneNumber;
    this.registration.registerNumber=this.registerForm.value.registerNumber;
    this.submitted = true;
    if (this.registerForm.valid) {
    this.service.AddRegistration(this.registration,this.attendance).then(res => {     
    });
    
     

  }
  this.route.navigate(['/']);
  }

}
