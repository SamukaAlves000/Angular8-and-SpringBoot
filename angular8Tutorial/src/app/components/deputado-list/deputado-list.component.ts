import { Component, OnInit } from '@angular/core';
import { Deputado } from 'src/app/common/deputado';
import { DeputadoService } from 'src/app/services/deputado.service';

@Component({
  selector: 'app-deputado-list',
  //templateUrl: './deputado-list.component.html',
  templateUrl: './deputado-grid.component.html',
  styleUrls: ['./deputado-list.component.css']
})
export class DeputadoListComponent implements OnInit {

  
deputados: Deputado[] = []
  constructor(private _deputadoService: DeputadoService) { }

  ngOnInit(): void {
    this.listDeputados();
  }

  listDeputados(){
    this._deputadoService.getDeputados().subscribe(
      data => this.deputados = data
        
       // console.log(data);
      
    )
  }

}
