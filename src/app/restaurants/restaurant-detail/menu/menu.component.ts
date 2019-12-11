import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../restaurant.service'
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router'
import { MenuItem } from '../menu-item/menu-item.model';
@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {


  menu: Observable<MenuItem []>

  constructor(private restaurantsService:RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.menu=this.restaurantsService
        .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  // parent, hence being manu, a child node
  }

  addMenuItem(item:MenuItem){
    console.log(item)
  }

}
