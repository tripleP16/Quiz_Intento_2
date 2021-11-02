import Visitor from "./Visitor";

export default abstract class Product {
    abstract accept(v: Visitor): any
}