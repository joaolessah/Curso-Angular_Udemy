import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    {{valor}}
    <button (click)="adicionar()">Adicionar</button>
    <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

    public valor: number = 1;

    constructor() { }

    public adicionar(): number{
        return this.valor +=1
    }


    ngOnInit():void{}

    //carrega após uma ação
    ngDoCheck(): void { console.log("ngDoChecked")}
    ngAfterContentChecked(): void {console.log("ngAfterContentChecked")}
    ngAfterViewInit(): void {console.log("ngAfterViewInit")}
    // carrega assim que a pagina carrega
    ngAfterContentInit(): void {console.log("ngAfterContentInit")}
    ngAfterViewChecked(): void {console.log("ngAfterViewChecked")}
    //ngOndestroy/ apita quando um componente é destruído
    // ngif ocultar ou mostrar a informação, elemento
}
