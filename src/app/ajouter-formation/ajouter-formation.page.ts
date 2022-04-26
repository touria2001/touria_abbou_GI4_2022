import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/formation';
import { AdminService } from '../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.page.html',
  styleUrls: ['./ajouter-formation.page.scss'],
})
export class AjouterFormationPage implements OnInit {
  infoGeneral: FormGroup;
  formation: Formation={
    docid:"",
    date :"",
    prix:"",
    description:"",
    nom:""
  };
  constructor(  public adminService:AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public router:Router,
    public auth: AuthService) { }
    get date() {
      return this.infoGeneral.get('date');
    }
    get prix() {
      return this.infoGeneral.get('prix');
    }
    get description() {
      return this.infoGeneral.get('description');
    }
    get nom() {
      return this.infoGeneral.get('nom');
    }

    ngOnInit() {
      this.infoGeneral = this.fb.group({
        date:[''],
        prix:[''],
        description:[''],
        nom:['']    
      });
    }
  add(){
    this.adminService.add(this.infoGeneral.value);
    this.router.navigateByUrl('home');

  }
   
}
