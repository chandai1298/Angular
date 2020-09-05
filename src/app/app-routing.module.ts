import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { NotFoundComponent } from "./not-found/not-found.component";
import { ClientComponent } from "./client/client.component";
import { LoginComponent } from './client/pages/login/login.component';
import { SignupComponent } from './client/pages/signup/signup.component';
import { AuthenGuard } from './guard/authen.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthenGuard],
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [AuthenGuard],
  },
  {
    path: "",
    redirectTo: "client",
    pathMatch: "full",
  },

  {
    path: "client",
    loadChildren: () =>
      import("./client/client.module").then((m) => m.ClientModule),
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
