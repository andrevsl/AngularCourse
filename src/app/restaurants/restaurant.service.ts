import {Injectable} from '@angular/core'
import {Restaurant} from "./restaurant/restaurant.model"
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { HttpClient,HttpParams } from '@angular/common/http';
import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'
import { MenuItem } from './restaurant-detail/menu-item/menu-item.model';
import { IfStmt } from '@angular/compiler';
@Injectable()
export class RestaurantsService{

  constructor(private http:HttpClient){}
  
  
  restaurants(search?:string):Observable<Restaurant []> {
    let params:HttpParams=undefined
    if(search){
      params=new HttpParams().append('q',search) /* set or append*/
    }
    return this.http.get<Restaurant []>(`${MEAT_API}/restaurants`,{params:params})
 
  }

  restaurantById(id:string):Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)

  }


  reviewsOfRestaurant(id:string):Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id:string):Observable<MenuItem []> {
    return this.http.get<MenuItem []>(`${MEAT_API}/restaurants/${id}/menu`)
  }
}