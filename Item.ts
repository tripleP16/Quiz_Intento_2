import Product from "./Product";
import Visitor from "./Visitor";

export default class Item extends Product {
    price: Number; 
    constructor(price: Number ) {
        super();
        this.price = price;
    }
    accept(v: Visitor):any {
        return v.visitItem(this)
    }
}