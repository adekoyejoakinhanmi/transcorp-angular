import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { GenericScreenComponent } from './pages/generic-screen/generic-screen.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'generic', component: GenericScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
