import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { UserComponent } from "./user/user.component";
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
      {path: '',
      component: AdminComponent,
      children: [
        {
          path: 'users',
          component: UserComponent,
          
        },
        {
          path: 'login',
          component: LoginComponent,
          
        },
        {
          path: 'index',
          component: ContentComponent,
        },
        {
          path: 'adduser',
          component: AdduserComponent,
        }
      ]
    }
  ];
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
