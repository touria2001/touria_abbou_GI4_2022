import { Injectable } from '@angular/core';
import { AngularFireAuth,  } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import firebase from "firebase/compat/app";
import { ProfilUser } from '../models/profil-user';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toastservice: any;
  UserId: any;

  public formationlist = [];
  formations :Formation;
  constructor(

    public firestore: AngularFirestore,
    public auth: AngularFireAuth
  ) { }
  async signin(data) {
   
    try {
      const user = await this.auth.signInWithEmailAndPassword(data.email, data.password);
      return user;
    }
    catch (e) {
      return null;
    }
  }

 
  async signup(user: ProfilUser) {
    
    try {
      
      const userP = await this.auth.createUserWithEmailAndPassword(user.email, user.password);
      
      return userP;

    }
    catch (e) {
      return null;
    }
    
  }

  complementSignUp(data) {
    return this.firestore.collection("users").doc(data.uid).set(data);
  }

 

  getFormationsReserved(id:string) {
    return this.firestore.collection("users").doc(id).get();
  }
  

 getFormationById(id:string){
  return  this.firestore.collection("formations").doc(id).get();

 }


  
 signOut(){
  return this.auth.signOut();
 }

 
}
