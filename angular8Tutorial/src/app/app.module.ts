import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrgaoAddComponent } from './orgao-add/orgao-add.component';
import { OrgaoGetComponent } from './orgao-get/orgao-get.component';
import { OrgaoEditComponent } from './orgao-edit/orgao-edit.component';
import { OrgaosService } from './orgaos.service';

@NgModule({
  declarations: [
    AppComponent,
    OrgaoAddComponent,
    OrgaoGetComponent,
    OrgaoEditComponent
    
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
  providers: [OrgaosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
