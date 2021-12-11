import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

  public editForm:FormGroup;
  eventRef: any;

  constructor(
    public eventsservice:EventsService,
    public formBuilder: FormBuilder,
    private act:ActivatedRoute,
    private router: Router
  ) { 
    this.editForm = this.formBuilder.group({
      name: [''],
      event_id:[''],
      description:[''],
      duration: [''],
      registrationDeadline:[''],
      date:[''],
      venue:['']
    })
  }

  ngOnInit(): void {
    const id= this.act.snapshot.paramMap.get('id');

    this.eventsservice.getEventDoc(id!).subscribe(res=>{
      this.eventRef=res;
      this.editForm=this.formBuilder.group({
        name:[this.eventRef.name],
        event_id:[this.eventRef.event_id],
        date:[this.eventRef.date],
        description:[this.eventRef.description],
        registrationDeadline:[this.eventRef.registrationDeadline],
        venue:[this.eventRef.venue],
        duration:[this.eventRef.duration]
      })
    })
  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id');

    this.eventsservice.updateEvent(this.editForm.value, id!);
    this.router.navigate(['/list-event']);

  };

}