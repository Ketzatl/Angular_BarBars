import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
// tslint:disable-next-line:import-spacing
import { DashboardComponent } from  './admin/dashboard/dashboard.component';
import {AccueilComponent} from './accueil/accueil.component';
import {EventsComponent} from './events/events.component';
import {AlbumComponent} from './album/album.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  { path: 'album', component: AlbumComponent },
  { path: 'events', component: EventsComponent},
  { path: 'inscription', component: InscriptionComponent  },
  { path: 'accueil', component: AccueilComponent  },
  { path: 'admin/dashboard', component: DashboardComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'accueil' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
