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
var DecrementVisitor = /** @class */ (function (_super) {
    __extends(DecrementVisitor, _super);
    function DecrementVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecrementVisitor.prototype.visitPackage = function (p, products) {
        var item = null;
        products.forEach(function (product) {
            var aux = product;
            item = aux;
        });
        return item;
    };
    DecrementVisitor.prototype.visitItem = function (p) { return p; };
    DecrementVisitor.prototype.visitCandy = function (p) { return p; };
    DecrementVisitor.prototype.visitVegetable = function (p) {
        var aux = p.price;
        p.price = aux - 1;
        return p;
    };
    return DecrementVisitor;
}(Visitor_1["default"]));
exports["default"] = DecrementVisitor;
