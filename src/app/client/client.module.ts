import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { ProductComponent } from '../product/product.component';
import { ProductEditComponent } from '../product/product-edit/product-edit.component';
import { ProductRoutingModule } from '../product/product-routing.module';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';


@NgModule({
  declarations: [
    ClientComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})

export class ClientModule {}
