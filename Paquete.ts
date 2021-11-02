import Product from "./Product";
import Visitor from "./Visitor";

export default class Paquete extends Product {
    products: Product []  = [];
    add(p: Product): void{
        this.products.push(p);
    }
    accept(v: Visitor): any {
        let results: Product[] = []; 
        this.products.forEach(p => {
            results.push(p.accept(v));
        });

        return v.visitPackage(this, results);
    }
}