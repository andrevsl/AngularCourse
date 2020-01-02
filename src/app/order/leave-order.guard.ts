import {CanDeactivate,ActivatedRouteSnapshot, RouterStateSnapshot, RouterState} from '@angular/router'
import {OrderComponent} from './order.component'

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {
 
    canDeactivate (orderComponent:OrderComponent,
                   activateRoute: ActivatedRouteSnapshot,
                   routerState: RouterStateSnapshot ):boolean{
        if(!orderComponent.isOrderCompleted()){
            return window.confirm('Deseja desistir da Compra')
        } else{
            return true
        }
    }

}