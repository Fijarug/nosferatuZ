import { Injectable } from '@angular/core'

@Injectable()
export class Papel {

  public foto: string;
  public nome: string;
  public time: string;
  public acao: string;
  public acaoFeita: boolean;
  public descricao: string;

  constructor() {

  }
}