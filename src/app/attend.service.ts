import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Attend } from './attend.model';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AttendService {
  Attended(attend: Attend) {
    throw new Error('Method not implemented.');
  }

  constructor(private angularfirestore: AngularFirestore) { }
  
  getAttend(id:string)
  {
    return this.angularfirestore
    .collection("Attendance")
    .doc(id)
    .valueChanges()
  
  }

  getAttendList(){
    return this.angularfirestore
    .collection("Attendance")
    .snapshotChanges();
  }

  updateEvent(attend:Attend, id:string){
    return this.angularfirestore
    .collection("Attendance")
    .doc(id)
    .update({
      name:attend.registerNumber,
      description: attend.Hours,
      
    });

  }
  createEvent(Events: Attend){
    return new Promise<any>((_,reject)=>{
      this.angularfirestore
      .collection("Attendance")
      .add(Events)
      .then(Response=>{console.log(Response)},error=>reject(error));
    });
  }

}
