import {NgModule, ModuleWithProviders} from '@angular/core'
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurant.service';
import { OrderService } from '../order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoginService } from '../security/login/login.service';
import { LoggedInGuard } from '../security/loggedin.guard';

@NgModule({

declarations: [InputComponent, RadioComponent, RatingComponent,SnackbarComponent],
imports: [CommonModule, FormsModule, ReactiveFormsModule],
exports: [InputComponent,RadioComponent,RatingComponent,
          FormsModule,ReactiveFormsModule,SnackbarComponent]
})

export class SharedModule {
    static forRoot() : ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService,
                        RestaurantsService,
                        OrderService,
                        NotificationService,
                        LoginService,
                        LoggedInGuard]
        }
    }
}