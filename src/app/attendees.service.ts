import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Attendance } from './attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendeesService {

  constructor(private angularfirestore: AngularFirestore) { }

  getAttendDoc(id: string){
    return this.angularfirestore
    .collection("Attendance")
    .doc(id)
    .valueChanges()
  }

  getAttendlist(){
    return this.angularfirestore
    .collection("Attendance")
    .snapshotChanges();
  }

  updateAttend(attends:Attendance, id: string){
    return this.angularfirestore
    .collection("Attendance")
    .doc(id)
    .update({
      Hours: attends.Hours,
      registerNumber: attends.registerNumber,
    });
  }
}
