import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './pages/profile/profile/profile.component';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MaterialModule } from '../material.module';
import { Part1Component } from './main/practicesB1/part1/part1.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Part2Component } from './main/practicesB1/part2/part2.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    ClientComponent,
   
    Part1Component,
    Part2Component,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule,
    MatDialogModule,
    MatCardModule,
    MatRippleModule,
    MatRadioModule,

    

    ClientRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
   
  ]
})

export class ClientModule {}
