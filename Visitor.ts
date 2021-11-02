import Candy from "./Candy";
import Item from "./Item";
import Paquete from "./Paquete";
import Product from "./Product";
import Vegetable from "./Vegetable";

export default abstract class Visitor {
    abstract visitItem (i: Item): Item
    abstract visitPackage (p: Paquete, products: Product[]): Item | null
    abstract visitCandy (c: Candy): Item
    abstract visitVegetable (v: Vegetable): Item
}