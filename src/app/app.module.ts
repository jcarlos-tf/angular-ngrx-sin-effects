import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { appReducers } from './store/app.reducers';
import { UsuariosModule } from './usuarios/usuarios.module';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
