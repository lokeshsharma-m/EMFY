import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendeesService } from '../attendees.service';

@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.css']
})
export class UpdateAttendanceComponent implements OnInit {
  public eForm:FormGroup;
  eventRef: any;
  constructor(
    public attendeesService: AttendeesService,
    public formBuilder: FormBuilder,
    private act:ActivatedRoute,
    private router: Router
  ) { 
    this.eForm = this.formBuilder.group({
      registerNumber: [''],
      Hours:['']
    })
  }

  ngOnInit(): void {
    const id= this.act.snapshot.paramMap.get('id');

    this.attendeesService. getAttendDoc(id!).subscribe(res=>{
      this.eventRef=res;
      this.eForm=this.formBuilder.group({
        registerNumber:[this.eventRef.registerNumber],
        Hours:[this.eventRef.Hours]
      })
    })
  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id');

    this.attendeesService.updateAttend(this.eForm.value, id!);
    this.router.navigate(['/list-attendance']);

  };

}
