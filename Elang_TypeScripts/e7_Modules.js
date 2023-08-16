"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Modules, "." can be used as separator for sub modules
var Geometry;
(function (Geometry) {
    var Square = /** @class */ (function () {
        function Square(sideLength) {
            if (sideLength === void 0) { sideLength = 0; }
            this.sideLength = sideLength;
        }
        Square.prototype.area = function () {
            return Math.pow(this.sideLength, 2);
        };
        return Square;
    }());
    Geometry.Square = Square;
})(Geometry || (Geometry = {}));
var s1 = new Geometry.Square(5);
// Local alias for referencing a module
var G = Geometry;
var s2 = new G.Square(10);
var e11_externalmodule_1 = require("./e11_externalmodule");
var objEU = new e11_externalmodule_1.EmployeeUtility();
console.log(objEU.GenerateEmpID());
//# sourceMappingURL=e7_Modules.js.map