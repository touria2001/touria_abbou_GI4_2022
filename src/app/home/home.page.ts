import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { DataService } from '../service/data.service';
import {  Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  listFormations = [];
 tableauFormations = [];




 


  
 
 
  constructor(
    public dataService : DataService,
    public authService: AuthService,
    public router:Router,
    public storage: Storage
   ) {
    
       this.dataService.getFormations().subscribe(res => {
        this. listFormations = res.map(e => {
        return {
          docid: e.payload.doc.id,
          nom: e.payload.doc.data()["nom"],
          date: e.payload.doc.data()["date"],
          prix: e.payload.doc.data()["prix"],
          description: e.payload.doc.data()["description"]
        }
        }) 
        

      },(err:any) => {
        console.log(err)
      })

    
    }

    versPageDetails(docid){
      this.router.navigateByUrl('details/' + docid);
    }
   
   mesCommandes(){
    this.router.navigateByUrl('reserved-formations');

   }
     
    reserve(data){ 
      this.storage.get('idCurrentUser').then((val) => {
        console.log(val);
        console.log(data);
     
      this.dataService.reserver(data,val);
      this.router.navigateByUrl('home');
    });
    }
   
    signOut(){
      this.authService.signOut().then(()=>{
        this.router.navigateByUrl('sign-in');

      });
    }
}
