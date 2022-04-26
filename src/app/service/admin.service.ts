import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import firebase from "firebase/compat/app";

import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( public firestore: AngularFirestore,
    public auth: AngularFireAuth) { }

  add(formation:Formation){
    const formationRef = this.firestore.collection('formations');
    formationRef.add(formation);
  }

  update(formation : Formation,id:string){
    const formationRef = this.firestore.collection("formations").doc(id);
    formationRef.update(formation);
  }
  delete(id:string){
    const formationRef = this.firestore.collection("formations").doc(id);
        formationRef.delete();
  }
}
