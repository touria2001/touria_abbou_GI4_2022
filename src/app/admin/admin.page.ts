import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { DataService } from '../service/data.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {
  listFormations = [];
  tableauFormations = [];

  

 
 
  constructor(public adminService: AdminService,
  
    public dataService: DataService,
    public authService: AuthService,
    public router: Router,
    public storage: Storage) {


    this.dataService.getFormations().subscribe(res => {
      this.listFormations = res.map(e => {
        return {
          docid: e.payload.doc.id,
          description: e.payload.doc.data()["description"],
          nom: e.payload.doc.data()["nom"],
          date: e.payload.doc.data()["date"],
          prix: e.payload.doc.data()["prix"]
        }
      })

    }, (err: any) => {
      console.log(err)
    })
  }
  delete(index, idFormation: string) {
    this.listFormations.splice(index, 1);
    this.adminService.delete(idFormation);
  }
  add() {
    this.router.navigateByUrl('ajouter-formation');

  }

  versPageDetails(docid) {
    this.router.navigateByUrl('details/' + docid);
  }
  update(idFormation:string) {
    this.router.navigateByUrl('modifier-formation/'+idFormation);

  }
  async printFormationsReserved() {




    this.storage.get('idCurrentUser').then((val) => {
      this.authService.getFormationsReserved(val).subscribe(res => {
        this.tableauFormations = res.data()['formations'];
        for (var i = 0; i < this.tableauFormations.length; i++) {
          this.authService.getFormationById(res.data()['formations'][i]).subscribe(r => {
          });
        }
      })
    });


  }








}
