import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { DataService } from '../service/data.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reserved-formations',
  templateUrl: './reserved-formations.page.html',
  styleUrls: ['./reserved-formations.page.scss'],
})
export class ReservedFormationsPage implements OnInit {
  tableauFormations = [];  
  x = {
    docid : "",
              nom:"",
              date: "",
              description:"",
              prix:""
  };
  noFormation:number=0;
  formationReserved: any;
  constructor(public dataService: DataService,
    public authService: AuthService, 
    public storage: Storage,
    public router: Router)
    
    {
     
     
      this.storage.get('idCurrentUser').then((val) => {
        this.authService.getFormationsReserved(val).subscribe(res => {
          try{
            this.tableauFormations = res.data()['formations'];

          }catch(e){
this.noFormation=1;
          }
       if(this.noFormation==0){
      this.formationReserved = [];
         this.tableauFormations.map( e => {
          
         return  this.authService.getFormationById(e).subscribe(r => {

        
              this.x.docid = e;
              this.x.nom= r.data()['nom'];
              this.x.date= r.data()['date'];
              this.x.description=r.data()['description'];
              this.x.prix= r.data()['prix'];
              console.log(this.x);
              this.formationReserved.push(this.x);

             
          });
        

    
         });}


        
        })
      });
     }

  ngOnInit() {
  }
  async annuler( id:string) {
    this.storage.get('idCurrentUser').then((val) => {
      
   
      this.dataService.annulerReservation(id,val);
      
    });
    this.router.navigateByUrl('home');

    
  
 

      
  }
}
