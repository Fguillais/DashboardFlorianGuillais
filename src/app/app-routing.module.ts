import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CommmandesComponent } from './commmandes/commmandes.component';
import { PanierComponent } from './panier/panier.component';
import { UtlisateurComponent } from './utlisateur/utlisateur.component';
import { VentesComponent } from './ventes/ventes.component';

const routes: Routes = [
  { path: "" , component: AccueilComponent },
  { path: "ventes" , component: VentesComponent },
  { path: "commandes" , component: CommmandesComponent },
  { path: "panier" , component: PanierComponent },
  { path: "utilisateur" , component: UtlisateurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
