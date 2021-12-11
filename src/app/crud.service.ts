import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable,BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import {Login,Registration,Attendance}from './college.model';

 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public followState = new BehaviorSubject<boolean>(false);
  //items: Observable<any[]>;
  constructor(private service: AngularFirestore) {
    // this.items = afs.collection('users').valueChanges();     
    // const tutorialsRef = afs.collection('tutorials');
  }
  
 

  AddRegistration(registration:Registration,attendance:Attendance) {
    console.log(registration)
    return new Promise<any>((resolve, reject) => {
      this.service
        .collection("Registration")
        .add({
          fullName:registration.fullName,
          email:registration.email,
          password:registration.password,
          department:registration.department,
          registerNumber:registration.registerNumber,
          phoneNumber:registration.phoneNumber
      })
        .then(res => {resolve;}, err => reject(err));
        this.service
        .collection("Attendance")
        .add({
          Hours:attendance.Hours,
          registerNumber:attendance.RegisterNumber
      })
        .then(res => {resolve;}, err => reject(err));
        
    });
  }

  Login(login:Login):Observable<number>{
    var subject = new Subject<number>();
    subject.next(0);
    this.service.collection('Registration',ref=> ref.where('email', '==',login.email).where('password', '==',login.password))
    .get().subscribe(user=>{
      if(user.docs.length ==1)
      {subject.next(1)}
      else{subject.next(0)}
    });
    this.service.collection('Admins', ref => ref.where('loginid', '==',login.email).where('password','==',login.password))
    .get().subscribe(user=>{
      if(user.docs.length==1)
      {subject.next(2)}
      else{subject.next(0)}
    });
    return subject.asObservable();
  }
  
  getAttend(id:string)
  {
    return this.service.
    collection("Attendance")
    .doc(id)
    .valueChanges()
  
  }

  getAttendList(){
    return this.service
    .collection("Attendance")
    .snapshotChanges();
  }

  updateEvent(attend:Attendance, id:string){
    return this.service
    .collection("Attendance")
    .doc(id)
    .update({
      name:attend.RegisterNumber,
      description: attend.Hours,
      
    });

  }
  createEvent(Events: Attendance){
    return new Promise<any>((_,reject)=>{
      this.service
      .collection("Attendance")
      .add(Events)
      .then(Response=>{console.log(Response)},error=>reject(error));
    });
  }
    

}
