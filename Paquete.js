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
var Product_1 = require("./Product");
var Paquete = /** @class */ (function (_super) {
    __extends(Paquete, _super);
    function Paquete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.products = [];
        return _this;
    }
    Paquete.prototype.add = function (p) {
        this.products.push(p);
    };
    Paquete.prototype.accept = function (v) {
        var results = [];
        this.products.forEach(function (p) {
            results.push(p.accept(v));
        });
        return v.visitPackage(this, results);
    };
    return Paquete;
}(Product_1["default"]));
exports["default"] = Paquete;
