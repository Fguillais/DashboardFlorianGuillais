import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CommmandesComponent } from './commmandes/commmandes.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { PanierComponent } from './panier/panier.component';
import { UtlisateurComponent } from './utlisateur/utlisateur.component';
import { VentesComponent } from './ventes/ventes.component';

const routes: Routes = [
  { path: "" , component: AccueilComponent },
  { path: "ventes" , component: VentesComponent },
  { path: "commandes" , component: CommmandesComponent },
  { path: "panier" , component: PanierComponent },
  { path: "utilisateur" , component: UtlisateurComponent },
  { path: "not-found" , component: FourOhFourComponent },
  { path: "**" , redirectTo: "not-found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
