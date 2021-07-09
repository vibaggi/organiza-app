import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepublicaService } from '../services/republica.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.page.html',
  styleUrls: ['./rank.page.scss'],
})
export class RankPage implements OnInit {

  constructor(private router: Router, private _repService: RepublicaService) { }

  republica = localStorage.getItem('organiza-republica')
  moradores = []

  ngOnInit() {
    this._repService.rankRepublica().subscribe((resp:any)=>{
      this.moradores = resp.sort(function(a,b){return b.saldo - a.saldo})

      console.log(resp);
    })
  }

}
