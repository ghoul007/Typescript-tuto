"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name) {
        if (name === void 0) { name = "ahmed"; }
        this.name = name;
    }
    return User;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        var _this = _super.call(this, 'ffff') || this;
        _this.v = 2;
        return _this;
    }
    A.prototype.hello = function () {
        console.log(this.v, this.name);
    };
    return A;
}(User));
var new_a = new A();
new_a.hello();
