import { Component, OnInit } from '@angular/core';
import { Attend } from '../attend.model';
import { AttendService } from '../attend.service';
import { Observable } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';



@Component({
  selector: 'app-att',
  templateUrl: './att.component.html',
  styleUrls: ['./att.component.css']
})
export class AttComponent implements OnInit {
Attendance: Attend[];
  firestore: any;
  attend=new Attend();
  message:string='';

  constructor(private user: AttendService,private db:AngularFirestore,private route:Router ) { }
rNumber:any;
  registerNumber: string;
  filter = {}



  ngOnInit(): void{
   
    this.user.getAttendList().subscribe(res=>{
      this.Attendance =res.map( e=> {
        return{
          id  : e.payload.doc.id,
          ...e.payload.doc.data() as {},
        } as Attend;
      })
    });
   
    }

}

