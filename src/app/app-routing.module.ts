import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  
  
  
  
  {
    path: 'details/:idFormation',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'reserved-formations',
    loadChildren: () => import('./reserved-formations/reserved-formations.module').then( m => m.ReservedFormationsPageModule)
  },
  {
    path: 'ajouter-formation',
    loadChildren: () => import('./ajouter-formation/ajouter-formation.module').then( m => m.AjouterFormationPageModule)
  },
  {
    path: 'modifier-formation/:idFormation',
    loadChildren: () => import('./modifier-formation/modifier-formation.module').then( m => m.ModifierFormationPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
