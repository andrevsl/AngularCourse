import { Component, OnInit,Input } from '@angular/core';
import {radioOption} from '../shared/radio/radio-option.model'
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { OrderItem } from './order.model';
import {Router} from '@angular/router'
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number=8

  @Input() paymentOptions: radioOption []=[
    {label:'Dinheiro', value:'MON'},
    {label:'Cartão de Débito', value:'DEB'},
    {label:'Cartão Refeição', value:'REF'}
  ]
 
  constructor(private orderService:OrderService,
                       private router: Router) {
    
  }
  ngOnInit() {
  }

  itemsValue(): number{ 
    return this.orderService.itemsValue()
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

  checkOrder(order: any){
    order.OrderItems=this.cartItems()
      .map((item:CartItem)=>new OrderItem(item.quantity,item.menuItem.id))
    
  this.orderService.checkOrder(order).
        subscribe( (orderId: string) =>{
          this.router.navigate(['/order-summary']) 
          this.orderService.clear()
  })

  console.log(order)
  }

}
