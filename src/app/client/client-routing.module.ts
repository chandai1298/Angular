import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
//import {LoginComponent} from './page/login/login.component';
//import {SignupComponent} from './page/signup/signup.component';
// import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from "../client/pages/profile/profile/profile.component";
import { ClientComponent } from "./client.component";
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Part1Component } from './main/practicesB1/part1/part1.component';
// import { HomeComponent } from './player/home/home.component';
// import { AlbumComponent } from './player/album/album.component';
// import { TracksComponent } from './player/tracks/tracks.component';
// import { TrackComponent } from './player/track/track.component';
// import { ListenComponent } from './player/listen/listen.component';
// import { GoogletranslateComponent } from './function/googletranslate/googletranslate.component';
// import { Part1Component } from './main/practicesB1/part1/part1.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
        
      },
      {
        path: 'login',
        component: LoginComponent,
        // canDeactivate: [CheckEditGuard]
      },
      {
        path: 'signup',
        component: SignupComponent,
        // canDeactivate: [CheckEditGuard]
      },
      {
        path: 'part1',
        component: Part1Component,
        // canDeactivate: [CheckEditGuard]
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
