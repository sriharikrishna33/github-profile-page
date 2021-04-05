"use strict";
exports.__esModule = true;
exports.Repositiories = exports.License = exports.Owner = void 0;
var Owner = /** @class */ (function () {
    function Owner() {
    }
    return Owner;
}());
exports.Owner = Owner;
var License = /** @class */ (function () {
    function License() {
    }
    return License;
}());
exports.License = License;
var Repositiories = /** @class */ (function () {
    function Repositiories() {
        this.owner = new Owner();
        this.license = new License();
    }
    return Repositiories;
}());
exports.Repositiories = Repositiories;
