import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  Attendance} from '../college.model';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-upload-attendance',
  templateUrl: './upload-attendance.component.html',
  styleUrls: ['./upload-attendance.component.css']
})
export class UploadAttendanceComponent implements OnInit {
  Attendance = new Attendance();
  eventRef:any;
  public editForm:FormGroup
  constructor(public service:CrudService,private route:Router) {}
  ngOnInit(): void {
    this.service.getAttendList().subscribe(res=>{
       res.map( e=> {
        return{
          id  : e.payload.doc.id,
          ...e.payload.doc.data() as {},
        } as Attendance;
      })
    });
  }
  }


