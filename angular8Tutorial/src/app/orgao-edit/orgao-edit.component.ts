import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrgaosService } from '../orgaos.service';

@Component({
  selector: 'app-orgao-edit',
  templateUrl: './orgao-edit.component.html',
  styleUrls: ['./orgao-edit.component.css']
})
export class OrgaoEditComponent implements OnInit {

 angForm: FormGroup;  
 orgao: any = {};  
  constructor(private route: ActivatedRoute, private router: Router, private os: OrgaosService, private fb: FormBuilder) {  
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
  ngOnInit() {  
    this.route.params.subscribe(params => {  
        this.os.editOrgao(params['id']).subscribe(res => {  
          this.orgao = res;  
      });  
    });  
  }
  
  
  updateOrgao(id,uri,sigla,nome,apelido,codTipoOrgao,tipoOrgao) { 
    this.route.params.subscribe(params => { 
    this.os.updateOrgao(id,uri,sigla,nome,apelido,codTipoOrgao,tipoOrgao);  
    this.router.navigate(['orgaos']);  
    });
  }

}
