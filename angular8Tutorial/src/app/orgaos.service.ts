import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrgaosService {

  uri = 'http://localhost:8080/orgaos';  

  constructor(private http: HttpClient) { }  

  addProduct(id, uri, nome,sigla,apelido,codTipoOrgao,tipoOrgao) {  
    const obj = {  
      id,
      uri,
      nome,
      sigla,
      apelido,
      codTipoOrgao,
      tipoOrgao  
    };  
    console.log(obj);  
    this.http.post(`${this.uri}`, obj)  
        .subscribe(res => console.log('Done'));  
  }

  getOrgaos() {  
    return this  
           .http  
           .get(`${this.uri}`);  
  }
  
  editOrgao(id) {  
    return this  
            .http  
            .get(`${this.uri}/edit/${id}`);  
    }  

    updateOrgao(id, uri, nome,sigla,apelido,codTipoOrgao,tipoOrgao) {  
      const obj = {  
        id,
        uri,
        nome,
        sigla,
        apelido,
        codTipoOrgao,
        tipoOrgao  
      };  
      console.log(obj);  
      this.http.put(`${this.uri}`, obj)  
          .subscribe(res => console.log('Done'));  
    }
}