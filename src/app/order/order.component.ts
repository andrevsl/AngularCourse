import { Component, OnInit,Input } from '@angular/core';
import {radioOption} from '../shared/radio/radio-option.model'
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/cart-item.model';
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  @Input() paymentOptions: radioOption []=[
    {label:'Dinheiro', value:'MON'},
    {label:'Cartão de Débito', value:'DEB'},
    {label:'Cartão Refeição', value:'REF'}
  ]
 
  constructor(private orderService:OrderService) {
    
  }
  ngOnInit() {
  }

  cartItems(): CartItem []  {
    return this.orderService.cartItems()
  }


  increaseQty(item:CartItem){
    this.orderService.increaseQty(item)
  }

  
  decreaseQty(item:CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }



}
