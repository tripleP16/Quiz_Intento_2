import Item from "./Item";
import Product from "./Product";
import Visitor from "./Visitor";

export default class Vegetable extends Item {
    constructor(price: Number){
        super(price);
    }

    accept(v: Visitor): Object {

        return v.visitVegetable(this);
    }
}