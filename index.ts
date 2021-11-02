import Candy from "./Candy";
import CheaperVisitor from "./CheaperVisitor";
import Item from "./Item";
import Paquete from "./Paquete";
import Vegetable from "./Vegetable";

function main() {
    const c1: Candy = new Candy(10); 
    const c2: Candy = new Candy(5); 
    const c3: Candy = new Candy(1); 

    let paquete: Paquete = new Paquete(); 
    paquete.add(c1);
    paquete.add(c2);
    paquete.add(c3); 
    let vegetal: Vegetable = new Vegetable(4); 
    let p1:Paquete = new Paquete(); 
    p1.add(paquete); 
    p1.add(vegetal); 
    let it: Item = p1.accept(new CheaperVisitor()) as Item;
    console.log(it.price);
}

main();
