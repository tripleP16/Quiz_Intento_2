"use strict";
exports.__esModule = true;
var Candy_1 = require("./Candy");
var CheaperVisitor_1 = require("./CheaperVisitor");
var Paquete_1 = require("./Paquete");
var Vegetable_1 = require("./Vegetable");
function main() {
    var c1 = new Candy_1["default"](10);
    var c2 = new Candy_1["default"](5);
    var c3 = new Candy_1["default"](1);
    var paquete = new Paquete_1["default"]();
    paquete.add(c1);
    paquete.add(c2);
    paquete.add(c3);
    var vegetal = new Vegetable_1["default"](4);
    var p1 = new Paquete_1["default"]();
    p1.add(paquete);
    p1.add(vegetal);
    var it = p1.accept(new CheaperVisitor_1["default"]());
    console.log(it.price);
}
main();
