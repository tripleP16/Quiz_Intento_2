import Candy from "./Candy";
import Item from "./Item";
import Paquete from "./Paquete";
import Product from "./Product";
import Vegetable from "./Vegetable";
import Visitor from "./Visitor";

export default class DecrementVisitor extends Visitor {
    visitPackage(p: Paquete, products: Product[]): Item | null {
        let item: Item | null = null; 
        products.forEach(product => {
            let aux = product as Item;
            item = aux;
        });
        return item;
    }
    visitItem (p: Item): Item {return p}
    visitCandy (p: Candy): Item {return p}
    visitVegetable (p: Vegetable): Item {
        let aux: any = p.price;
        p.price = aux -1;
        return p;
    }
}