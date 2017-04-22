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
        return _super.call(this) || this;
    }
    Weapon.prototype.getDamage = function () { return this.damage; };
    Weapon.prototype.setDamage = function (damage) { this.damage = damage; };
    return Weapon;
}(Equipment));
;
//# sourceMappingURL=Weapon.js.map