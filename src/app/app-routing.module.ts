import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicationComponent } from './publication/publication.component'

const routes: Routes = [
  { path: 'publication/create', component: PublicationComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
