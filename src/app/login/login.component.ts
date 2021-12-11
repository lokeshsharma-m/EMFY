import { Component, OnInit } from '@angular/core';
import {CrudService} from '../crud.service'
import {Login}from '../college.model'
import {Router} from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login= new Login();
    message:string='';
  constructor(private route:Router, private service:CrudService) { }
  
  ngOnInit(): void {
    //this.login.email='ashu@gmail.com';
    //this.login.password='Pondicherry1';
    
     //.then(res => {
    //   if(res==true)
    //   {
    //   this.route.navigate(['/studhome']);
    //   }
    //   else{

    //   }
    //   /*do something here....maybe clear the form or give a success message*/
    // });
    
  }  
Login(login:Login)
{
  if(login.email!="")
  {
  this.service.Login(login).subscribe(data => {
    if(data==1)      
    {
      this.route.navigate(['/studhome']);
    }
    else if(data==2)
    {
      this.route.navigate(['/adminhomepage'])
    }
   else {
     this.message='Incorrect Email/Password';
       }
   });
  }
  else {
    this.message='Please enter Email and Password';
      }
}
}
