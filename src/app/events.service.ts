import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private angularfirestore:AngularFirestore) { }

  getEventDoc(id: string){
    return this.angularfirestore
    .collection("event")
    .doc(id)
    .valueChanges()
  }

  getEventlist(){
    return this.angularfirestore
    .collection("event")
    .snapshotChanges();
  }

  createEvent(Events: Event){
    return new Promise<any>((_,reject)=>{
      this.angularfirestore
      .collection("event")
      .add(Events)
      .then(Response=>{console.log(Response)},error=>reject(error));
    });
  }

  deleteEvent(Events: Event){
    return this.angularfirestore
    .collection("event")
    .doc(Events.id)
    .delete();
  }

  updateEvent(Events:Event, id: string){
    return this.angularfirestore
    .collection("event")
    .doc(id)
    .update({
      name:Events.name,
      description: Events.description,
      duration: Events.duration,
      registrationDeadline: Events.registrationDeadline,
      date: Events.date,
      venue: Events.venue
    });

  }
}
