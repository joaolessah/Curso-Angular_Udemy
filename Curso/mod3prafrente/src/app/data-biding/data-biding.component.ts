;import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit{

    public nome:string = "João";
    public idade:number = 29;

    public checkedDisable: boolean = true
    public imgSRC: string = "https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg"
    public imgTitle: string = "Property Biding"

    public position: {x: number, y:number} = {x: 0, y:0}


    public alertInfo(valor: MouseEvent){
      console.log(valor)
    }

    public mouseMoveTeste(valor: MouseEvent){
      console.log(valor)
      this.position.x= valor.offsetX;
      this.position.y= valor.offsetY;

    }

    constructor(){}
    ngOnInit(): void {
        
    }
}
