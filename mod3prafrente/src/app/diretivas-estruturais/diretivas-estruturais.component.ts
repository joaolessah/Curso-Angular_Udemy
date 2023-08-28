import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-diretivas-estruturais',
    templateUrl: './diretivas-estruturais.component.html',
    styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

    public condition: boolean = true
    public conditionClick: boolean = true
    public list:Array<{nome:string, idade:number}> = [
        {nome: 'João', idade:25}, 
        {nome: 'Tallita', idade:24},
        {nome: 'Pedro', idade: 20}
    ]

    public nome:string = 'joao'
    constructor() { }
    ngOnInit(): void {

        setInterval(()=>{
            if(this.condition){
                this.condition = false
            }else{
                this.condition = true
            }
        }, 2000)

    }

    public onnClick(){
        if(this.conditionClick){
            this.conditionClick = false
        }else{
            this.conditionClick = true
        }
    }

    public onnClickAddList(){
        this.list.push({nome: "Nay", idade: 31})
    }

    public onClickEventList(event: number){
        this.list.splice(event, 1)
    }
}
