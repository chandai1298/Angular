import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//import {LoginComponent} from './page/login/login.component';
//import {SignupComponent} from './page/signup/signup.component';
// import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from "../client/pages/profile/profile/profile.component";
import { ClientComponent } from "./client.component";
import { Part1Component } from "./main/practicesB1/part1/part1.component";
import { RoleGuardGuard } from '../guard/role-guard.guard';
import { ClientGuard } from '../guard/client.guard';
// import { HomeComponent } from './player/home/home.component';
// import { AlbumComponent } from './player/album/album.component';
// import { TracksComponent } from './player/tracks/tracks.component';
// import { TrackComponent } from './player/track/track.component';
// import { ListenComponent } from './player/listen/listen.component';
// import { GoogletranslateComponent } from './function/googletranslate/googletranslate.component';
// import { Part1Component } from './main/practicesB1/part1/part1.component';

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    canActivate: [ClientGuard], 
    data: { 
      expectedRole: '2'
    }, 
    children: [
      
      {
        path: "",
        component: ProfileComponent,
      },
      {
        path: "part1",
        component: Part1Component,
        // canDeactivate: [CheckEditGuard]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
