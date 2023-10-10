import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "X bacon",
    "Feijão",
    "Ovo"
  ];


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  private url:string="http://localhost:3000/" //

  constructor(private http: HttpClient) { }

/*   public foodList(){
    return this.list;
  } */


  //get
  public foodList(): Observable<Array<FoodList>>{
    return this.http.get<Array<FoodList>>(this.url + "list-food")
                    .pipe(
                      res=>res,
                      error =>error
                    )
  }

  //post

  // pra passar o header do http options basta dar uma virgula dps do value e colocar this.httpOptions

  public foodListAdd(value:string):Observable<FoodList>{
    return this.http.post<FoodList>(this.url + "list-food", {nome: value}).pipe(
    res=> res,
    error=>error
    )
  }


/*   public foodListAdd(value:string){
    this.foodListAlert(value);
    return this.list.push(value);
  } */

  public foodListAlert(value: FoodList){
    return this.emitEvent.emit(value);
  }

  public foodListEdit(value:string, id:number):Observable<FoodList>{
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, {nome: value}).pipe(
    res=> res,
    error=>error
    )
  }


  public foodListDelete(id:number):Observable<FoodList>{
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
    res=> res,
    error=>error
    )
  }
}
