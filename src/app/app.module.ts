import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { VentesComponent } from './ventes/ventes.component';
import { CommmandesComponent } from './commmandes/commmandes.component';
import { PanierComponent } from './panier/panier.component';
import { UtlisateurComponent } from './utlisateur/utlisateur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CardsComponent } from './cards/cards.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VentesComponent,
    CommmandesComponent,
    PanierComponent,
    UtlisateurComponent,
    AccueilComponent,
    CardsComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
