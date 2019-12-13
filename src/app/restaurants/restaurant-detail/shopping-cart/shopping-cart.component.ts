import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shortCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items() :any[]{
    return this.shortCartService.items;
  }

  total(): number {
    return this.shortCartService.total()
  }

}
