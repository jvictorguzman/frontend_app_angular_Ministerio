import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms'; // para trabajar con formularios reactivos
import { HttpClientModule } from '@angular/common/http' // este modulo ayudara a salir a internet y conectar con el servicio
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ]
})
export class AuthModule { }
