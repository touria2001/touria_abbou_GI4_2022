import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/formation';
import { AdminService } from '../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.page.html',
  styleUrls: ['./modifier-formation.page.scss'],
})
export class ModifierFormationPage implements OnInit {
  infoGeneral: FormGroup;

formation: Formation={
  docid:"",
  nom :"",
  date:"",
  prix:"",
  description:""
};
idFormation: string;
   constructor(
    public adminService:AdminService,

    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public router:Router,
    public auth: AuthService
    ) { 
      
    this.idFormation = this.activatedRoute.snapshot.paramMap.get('idFormation');
    this.auth.getFormationById(this.idFormation).subscribe(res => {
      this.formation = {
        docid:this.idFormation,
        nom:res.data()['nom'],
        date:res.data()['date'],
        prix:res.data()['prix'],
        description: res.data()['description']
      }
    },(err:any) => {
      console.log(err)
    });

    
     }
  get nom() {
    return this.infoGeneral.get('nom');
  }
  get date() {
    return this.infoGeneral.get('date');
  }
  get prix() {
    return this.infoGeneral.get('prix');
  }
  get description() {
    return this.infoGeneral.get('description');
  }

 


  ngOnInit() {
 
    this.infoGeneral = this.fb.group({
      nom:[''],
      date:[''],
      prix:[''],
      description:['']    
    });
  
  }

 update(){
   if(this.infoGeneral.value['nom' ]== ''){
    this.infoGeneral.value['nom' ]=this.formation.nom;
    console.log(this.infoGeneral.value['nom']);
   }
   if(this.infoGeneral.value['date' ]== ''){
    this.infoGeneral.value['date' ]=this.formation.date;
    console.log(this.infoGeneral.value['nom']);
   }
   if(this.infoGeneral.value['prix' ]== ''){
    this.infoGeneral.value['prix' ]=this.formation.prix;
    console.log(this.infoGeneral.value['nom']);
   }
   if(this.infoGeneral.value['description' ]== ''){
    this.infoGeneral.value['description' ]=this.formation.description;
    console.log(this.infoGeneral.value['nom']);
   }

  this.adminService.update(this.infoGeneral.value,this.idFormation);
}
}
