import { Optional } from "@angular/core";

class Order {
constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOption: string,
    public oderItem: OrderItem []=[],
    public id?: string

){}

}

class OrderItem{

constructor(public quantity: number, public menuId: string){}
}

export {Order,OrderItem}