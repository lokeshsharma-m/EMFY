import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  Event: Event[];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getEventlist().subscribe(res => {
      this.Event = res.map(e => {
        return {
          ...e.payload.doc.data() as {},
          id: e.payload.doc.id,
        } as Event;
      })
    });
  }

  removeEvent(Events: Event) {
    if (confirm("Are you sure to delete " + Events.name)) {
      this.eventService.deleteEvent(Events);
    }

  }

}