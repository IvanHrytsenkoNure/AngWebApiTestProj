import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { PersonComponent } from 'src/app/Components/Person/person/person.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from 'src/app/AppStore/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffects } from 'src/app/Components/Person/Store/person.effect';
import { personReducer } from 'src/app/Components/Person/Store/person.reducer';
import { RouterModule, Routes } from '@angular/router';
import { PersonEditComponent } from 'src/app/Components/Person/person-edit/person-edit/person-edit.component';
import { PersonAddComponent } from 'src/app/Components/Person/person-add/person-add/person-add.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';


const accountRoutes: Routes = [  
  
];


const routes: Routes = [
  {
    path: 'account', 
    component: PersonComponent
  },

  {
    path: 'account',    
    children: accountRoutes,
  },
  
];
@NgModule({
  declarations: [
    PersonComponent,
    PersonAddComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("personReducers", personReducer),
    EffectsModule.forFeature([PersonEffects]),
    RouterModule.forChild(routes),
    MatDialogModule,
    BrowserModule, 
    FormsModule,
    

  ],
  exports:
  [
    PersonComponent,
    PersonAddComponent,
    PersonEditComponent
  ]
})
export class PersonModule { }
