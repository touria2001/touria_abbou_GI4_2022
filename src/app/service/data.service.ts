import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import firebase from "firebase/compat/app";
import { Formation } from '../models/formation';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  arrayFormation = [];
  UserId: any;
formation: Formation;
  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) { }
  getFormations(){
    return this.firestore.collection("formations").snapshotChanges();

  }

  reserver(data,id:string) {
    const user = this.firestore.collection("users").doc(id)
    user.update({
      formations: firebase.firestore.FieldValue.arrayUnion(data)
    })
  }
  annulerReservation(idFormation: string,id:string){
    const user = this.firestore.collection("users").doc(id)
    user.update({
      formations: firebase.firestore.FieldValue.arrayRemove(idFormation)
    })
  }




}
