import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgaoAddComponent } from './orgao-add/orgao-add.component';
import { OrgaoEditComponent } from './orgao-edit/orgao-edit.component';
import { OrgaoGetComponent } from './orgao-get/orgao-get.component';


const routes: Routes = [
  {  
    path: 'orgao/create',  
    component: OrgaoAddComponent  
  },  
  {  
    path: 'edit/:id',  
    component: OrgaoEditComponent  
  },  
  {  
    path: 'orgaos',  
    component: OrgaoGetComponent  
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
