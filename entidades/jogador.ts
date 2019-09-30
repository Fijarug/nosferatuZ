import { Injectable } from '@angular/core'
import { Papel } from '../entidades/papel';

@Injectable()
export class Jogador {

  public foto: string;
  public nome: string;
  public morto: boolean;
  public papel: Papel;
  public selecionado: boolean;

  constructor() {

  }
}