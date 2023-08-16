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
// Classes - members are public by default
var Point = /** @class */ (function () {
    // y: number;
    // Constructor - the public/private keywords in this context will generate
    // the boiler plate code for the property and the initialization in the
    // constructor.
    // In this example, "y" will be defined just like "x" is, but with less code
    // Default values are also supported
    //constructor(x: number,  y: number = 0) {
    //    this.x = x;
    //}
    function Point(x, y) {
        if (y === void 0) { y = 0; }
        this.y = y;
        this.x = x;
    }
    // Functions
    Point.prototype.dist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
    // Static members
    Point.origin = new Point(0, 0);
    return Point;
}());
var p1 = new Point(10, 20);
var p2 = new Point(25); //y will be 0
// Inheritance
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    // Overwrite
    Point3D.prototype.dist = function () {
        var d = _super.prototype.dist.call(this);
        return Math.sqrt(d * d + this.z * this.z);
    };
    return Point3D;
}(Point));
var propdemo = /** @class */ (function () {
    function propdemo() {
    }
    Object.defineProperty(propdemo.prototype, "EmpId", {
        get: function () {
            return this._empid;
        },
        set: function (v) {
            this._empid = v;
        },
        enumerable: false,
        configurable: true
    });
    return propdemo;
}());
var objE = new propdemo();
objE.EmpId = 123;
console.log(objE.EmpId);
//# sourceMappingURL=e6_Class.js.map