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
  formationReserved = [];

 
  // formationReserved: any;
  constructor(public dataService: DataService,
    public authService: AuthService,
    public storage: Storage,
    public router: Router) {


    this.storage.get('idCurrentUser').then((val) => {
      this.authService.getFormationsReserved(val).subscribe(res => {
        try {
          this.tableauFormations = res.data()['formations'];

        } catch (e) {
          console.log(e);
        }

        
        
      
        this.tableauFormations.map(e => {
        
          return this.authService.getFormationById(e).subscribe(r => {

         
          this.formationReserved.push({
            docid : e,
            nom :r.data()['nom'],
            date : r.data()['date'],
            description : r.data()['description'],
            prix :r.data()['prix']
          })
          


          });


        });



      })
    });
  }

  ngOnInit() {

  }
  async annuler(id: string) {
    this.storage.get('idCurrentUser').then((val) => {


      this.dataService.annulerReservation(id, val);

    });
    this.router.navigateByUrl('home');






  }
}
