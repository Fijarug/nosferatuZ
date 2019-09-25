import { Injectable } from '@angular/core'

@Injectable()
export class Papel {

  public foto: string;
  public nome: string;
  public time: string;
  public level: number;
  public acao: string;
  public acaoFeita: boolean;
  public descricao: string;
  public habilitado: boolean;
  public probabilidade: number;

  constructor() {

  }
}