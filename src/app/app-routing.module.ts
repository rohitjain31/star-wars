import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const appRoute: Routes = [
    { path: '', component: LoginComponent },
    { path: 'planets', component: HomeComponent, children: []},
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
