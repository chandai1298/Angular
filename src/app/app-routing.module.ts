import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { NotFoundComponent } from "./not-found/not-found.component";
import { ClientComponent } from "./client/client.component";

const routes: Routes = [
  
  {
    path: "",
    redirectTo: "client",
    pathMatch: "full",
  },
  // {
  //   path: "**",
  //   component: NotFoundComponent,
  // },
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
