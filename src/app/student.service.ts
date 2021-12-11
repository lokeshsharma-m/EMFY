import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private angularfirestore: AngularFirestore) {}

  getStudentDoc(id :string)
{
  return this.angularfirestore
  .collection("Registration")
  .doc(id)
  .valueChanges()
}
    getStudentList(){
      return this.angularfirestore
      .collection("Registration")
      .snapshotChanges();
    }
}

