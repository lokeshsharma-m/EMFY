import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from '../event.model';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public eventForm: FormGroup;
  submitted=false;
  event: Event = new Event();

  constructor(
    public eventsservice:EventsService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.eventForm = this.formBuilder.group({
      name: ['',Validators.required],
      description:['',Validators.required],
      duration: ['',Validators.required],
      registrationDeadline:['',Validators.required],
      date:['',Validators.required],
      venue:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  get eventFormControl(){
    return this.eventForm.controls;
  }

  onSubmit(){
    this.event.name = this.eventForm.value.name;
    this.event.date = this.eventForm.value.date;
    this.event.description = this.eventForm.value.description;
    this.event.registrationDeadline = this.eventForm.value.registrationDeadline;
    this.event.venue = this.eventForm.value.venue;
    this.event.duration = this.eventForm.value.duration;

    this.submitted=true;

    if(this.eventForm.valid){
    this.eventsservice.createEvent(this.eventForm.value);
    }
    this.router.navigate(['/list-event']);
  }
}