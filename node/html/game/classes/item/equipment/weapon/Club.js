var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Club = (function (_super) {
    __extends(Club, _super);
    function Club() {
        var _this = _super.call(this) || this;
        _this.name = 'Club';
        _this.damage = 3;
        _this.atkspd = 2000;
        return _this;
    }
    return Club;
}(Weapon));
;
var Mace = (function (_super) {
    __extends(Mace, _super);
    function Mace() {
        var _this = _super.call(this) || this;
        _this.name = 'Mace';
        _this.damage = 4;
        _this.atkspd = 2200;
        return _this;
    }
    return Mace;
}(Weapon));
;
var morningStar = (function (_super) {
    __extends(morningStar, _super);
    function morningStar() {
        var _this = _super.call(this) || this;
        _this.name = 'Morning Star';
        _this.damage = 8;
        _this.atkspd = 2200;
        _this.block = 1;
        return _this;
    }
    return morningStar;
}(Weapon));
;
var Flail = (function (_super) {
    __extends(Flail, _super);
    function Flail() {
        var _this = _super.call(this) || this;
        _this.name = 'Flail';
        _this.damage = 10;
        _this.atkspd = 2200;
        return _this;
    }
    return Flail;
}(Weapon));
;
var Maul = (function (_super) {
    __extends(Maul, _super);
    function Maul() {
        var _this = _super.call(this) || this;
        _this.name = 'Maul';
        _this.damage = 13;
        _this.atkspd = 2900;
        _this.block = 3;
        return _this;
    }
    return Maul;
}(Weapon));
;
var greatMaul = (function (_super) {
    __extends(greatMaul, _super);
    function greatMaul() {
        var _this = _super.call(this) || this;
        _this.name = 'Great Maul';
        _this.damage = 16;
        _this.atkspd = 3000;
        _this.block = 3;
        return _this;
    }
    return greatMaul;
}(Weapon));
;
//# sourceMappingURL=Club.js.map