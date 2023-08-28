import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges{
  
    @Input() public title:string = "Bem vindo!"
    // é executado primeiro o construtor e depois os ciclos de vida ocorrem
    constructor(){
    }
    //assim que ele gerar o component ele faz alguma coisa
    //usado para inicializar dados no componete - puxar as informações antes de tudo
    ngOnInit():void{}

    //sempre vai ativar quando vem um dado de fora, o default não mostra nada
    ngOnChanges(): void {
        console.log("Foi alterado com sucesso")
    }
  
}
