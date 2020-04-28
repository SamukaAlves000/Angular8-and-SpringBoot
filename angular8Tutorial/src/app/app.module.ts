import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeputadoListComponent } from './components/deputado-list/deputado-list.component';
import { DeputadoService } from './services/deputado.service';

@NgModule({
  declarations: [
    AppComponent,
    DeputadoListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule, 
    FormsModule
  ],
  providers: [
    DeputadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
