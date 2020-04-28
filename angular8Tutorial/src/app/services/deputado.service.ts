import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deputado } from '../common/deputado';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {

  private baseUrl = "http://localhost:8080/api/v1/deputados";

  constructor(private httpClient:HttpClient) { }

  getDeputados(): Observable<Deputado[]>{
      return this.httpClient.get<GetResponseDeputados>(this.baseUrl).pipe(
      map(response => response._embedded.deputados)
    )
  }
}

interface GetResponseDeputados{
  _embedded: {
    deputados: Deputado[];
  }
}
