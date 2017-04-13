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
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon() {
        var _this = _super.call(this, name) || this;
        _this.damage = 0;
        _this.atkspd = 1000;
        _this.block = 0;
        _this.type = 'weapon';
        return _this;
    }
    Weapon.prototype.getName = function () { return this.name; };
    Weapon.prototype.getDamage = function () { return this.damage; };
    Weapon.prototype.getAttackSpeed = function () { return this.atkspd; };
    Weapon.prototype.getBlock = function () { return this.block; };
    Weapon.prototype.setName = function (name) { this.name = name; };
    Weapon.prototype.setDamage = function (damage) { this.damage = damage; };
    Weapon.prototype.setAttackSpeed = function (atkspd) { this.atkspd = atkspd; };
    Weapon.prototype.setBlock = function (block) { this.block = block; };
    return Weapon;
}(Item));
;
//# sourceMappingURL=Weapon.js.map