import {NgModule} from '@angular/core'
import { OrderService } from 'app/order/order.service';
import { RestaurantsService } from 'app/restaurants/restaurant.service';
import { ShoppingCartService } from 'app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';


@NgModule ({

providers: [ShoppingCartService,RestaurantsService,OrderService]

})
export class CoreModule {}