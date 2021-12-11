import { Component, OnInit } from '@angular/core';
import { Attend } from '../attend.model';
import { Form, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


import { AttendService } from '../attend.service';



@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {
  Attendance: Attend[];
  eventRef:any;
  public editForm:FormGroup
  constructor(public formBuilder: FormBuilder,public eventservice:AttendService,private act:ActivatedRoute,private router:Router) {
    this.editForm=this.formBuilder.group({
      Hours:['']
    })
   }

  ngOnInit(): void {
    this.eventservice.getAttendList().subscribe(res=>{
      this.Attendance =res.map( e=> {
        return{
          id  : e.payload.doc.id,
          ...e.payload.doc.data() as {},
        } as Attend;
      })
    });
    const id= this.act.snapshot.paramMap.get('id');

    
  }


onSubmit()
{
 
};


}


