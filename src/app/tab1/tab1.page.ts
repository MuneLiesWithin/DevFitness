import { Component } from '@angular/core';
import { Exercicio, Treino} from '../../model/estruturas'
import { TreinoService } from '../treino.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  treinos : Treino [] = []

  constructor(private serv: TreinoService) {
    this.treinos = this.serv.treinos
  }
}