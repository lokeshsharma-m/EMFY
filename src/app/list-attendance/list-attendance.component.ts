import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Attendance } from '../attendance.model';
import { AttendeesService } from '../attendees.service';

@Component({
  selector: 'app-list-attendance',
  templateUrl: './list-attendance.component.html',
  styleUrls: ['./list-attendance.component.css']
})
export class ListAttendanceComponent implements OnInit {
  Attendance:Attendance[];
  constructor(private attendeesService: AttendeesService) { }

  ngOnInit(): void {
    this.attendeesService.getAttendlist().subscribe(res=>{
      this.Attendance =res.map( e=> {
        return{
          id  : e.payload.doc.id,
          ...e.payload.doc.data() as {},
        } as Attendance;
      })
    });
  }

}
