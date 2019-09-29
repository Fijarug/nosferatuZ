import { Injectable } from '@angular/core';

@Injectable()
export class Papel {

  public foto: string;
  public nome: string;
  public time: string;
  public level: number;
  public acaoFeita: boolean;
  public descricao: string;
  public habilitado: boolean;
  public probabilidade: number;
  //acoes
  public matar: boolean = false;
  public revelar: boolean = false;
  public defender: boolean = false;
  public transformar: boolean = false;
  public armadilha: boolean = false;

  constructor() {

  }
}