import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  Registration: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(){
    this.studentService.getStudentList().subscribe(res=>{
      this.Registration =res.map( e=> {
        return{
          id  : e.payload.doc.id,
          ...e.payload.doc.data() as {},
        } as Student;
      })
    });
  }

  
}
