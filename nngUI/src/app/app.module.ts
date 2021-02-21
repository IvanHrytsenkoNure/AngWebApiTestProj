import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { PersonModule } from './Modules/Person/person/person.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './AppStore/app.reducers';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderComponent } from './Components/Header/header/header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    PersonModule,
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    
    
  ],
  providers: 
  [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
