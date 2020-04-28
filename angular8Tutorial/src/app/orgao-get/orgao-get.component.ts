import { Component, OnInit } from '@angular/core';
import Orgao from 'src/Orgao';
import { OrgaosService } from '../orgaos.service';

@Component({
  selector: 'app-orgao-get',
  templateUrl: './orgao-get.component.html',
  styleUrls: ['./orgao-get.component.css']
})
export class OrgaoGetComponent implements OnInit {

  orgaos: Orgao[];  
  constructor(private os: OrgaosService) { }  
  ngOnInit() {  
    this.os  
      .getOrgaos()  
      .subscribe((data: Orgao[]) => {  
        this.orgaos = data;  
    });  
  }  

}
