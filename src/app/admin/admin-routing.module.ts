import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { UserComponent } from "./user/user.component";
import { ContentComponent } from "./content/content.component";
import { LoginComponent } from "./login/login.component";
import { AdduserComponent } from "./adduser/adduser.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./tables/users/users.component";
import { RoleGuardGuard } from '../guard/role-guard.guard';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [RoleGuardGuard], 
    data: { 
      expectedRole: '1'
    },
    children: [
      {
        path: "users",
        component: UserComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "index",
        component: ContentComponent,
      },
      {
        path: "adduser",
        component: AdduserComponent,
      },
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "listusers",
        component: UsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
