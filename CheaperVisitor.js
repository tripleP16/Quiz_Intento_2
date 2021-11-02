"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Visitor_1 = require("./Visitor");
var CheaperVisitor = /** @class */ (function (_super) {
    __extends(CheaperVisitor, _super);
    function CheaperVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheaperVisitor.prototype.visitPackage = function (p, products) {
        var min = 0;
        var item = null;
        products.forEach(function (product) {
            var aux = product;
            var price = aux.price;
            if (item != null) {
                if (price < min) {
                    item = aux;
                    min = price;
                }
            }
            else {
                item = aux;
                min = price;
            }
        });
        return item;
    };
    CheaperVisitor.prototype.visitItem = function (p) { return p; };
    CheaperVisitor.prototype.visitCandy = function (p) { return p; };
    CheaperVisitor.prototype.visitVegetable = function (p) { return p; };
    return CheaperVisitor;
}(Visitor_1["default"]));
exports["default"] = CheaperVisitor;
