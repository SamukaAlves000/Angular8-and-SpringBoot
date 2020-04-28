import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrgaosService } from '../orgaos.service';

@Component({
  selector: 'app-orgao-add',
  templateUrl: './orgao-add.component.html',
  styleUrls: ['./orgao-add.component.css']
})
export class OrgaoAddComponent implements OnInit {
  angForm: FormGroup;  
  constructor(private fb: FormBuilder, private os: OrgaosService) { 
    this.createForm(); 
  }

  createForm() {  
    this.angForm = this.fb.group({  
      OrganID: ['', Validators.required ],  
      OrganURI: ['', Validators.required ],  
      OrganInitials: ['', Validators.required ],
      OrganSigla: ['', Validators.required ], 
      OrganName: ['', Validators.required ], 
      OrganNickname: ['', Validators.required ], 
      OrgantypeID: ['', Validators.required ],
      OrganTypeDescription: ['', Validators.required ]
    });  
  }
  
  addProduct(id,uri,sigla,nome,apelido,codTipoOrgao,tipoOrgao) {  
    this.os.addProduct(id,uri,sigla,nome,apelido,codTipoOrgao,tipoOrgao);  
  }  

  ngOnInit(): void {
  }

}
