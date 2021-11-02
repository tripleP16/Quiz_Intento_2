import Candy from "./Candy";
import Item from "./Item";
import Paquete from "./Paquete";
import Product from "./Product";
import Vegetable from "./Vegetable";
import Visitor from "./Visitor"

export default class CheaperVisitor extends Visitor {
    visitPackage(p: Paquete, products: Product[]): Item | null{
        let min: Number = 0; 
        let item: Item | null = null; 
        products.forEach(product => {
            let aux = product as Item;
            let price: Number = aux.price;
            if(item != null) {
                if(price < min){
                    item = aux;
                    min = price;
                }
            }else {
                item = aux; 
                min = price;
            }
        });
        return item;
    }

    visitItem (p: Item): Item {return p}
    visitCandy (p: Candy): Item {return p}
    visitVegetable (p: Vegetable): Item {return p}
}