import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendService } from '../attend.service';
import { Attend } from '../attend.model';


@Component({
  selector: 'app-list-attendees',
  templateUrl: './list-attendees.component.html',
  styleUrls: ['./list-attendees.component.css']
})
export class ListAttendeesComponent implements OnInit {
  Attendance:Attend[];
  eventRef:any;
  public editForm:FormGroup
  constructor(public attendService:AttendService) {
    
    
  }

  ngOnInit(): void {
    this.attendService.getAttendList().subscribe(res=>{
      this.Attendance =res.map( e=> {
        return{
          id  : e.payload.doc.id,
          ...e.payload.doc.data() as {},
        } as Attend;
      })
    });
  }
  
}
