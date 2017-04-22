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
var Equipment = (function (_super) {
    __extends(Equipment, _super);
    function Equipment() {
        var _this = _super.call(this) || this;
        _this.str = 0;
        _this.dex = 0;
        _this.intel = 0;
        _this.vit = 0;
        _this.block = 0;
        _this.dodge = 0;
        _this.crit = 0;
        _this.lifesteal = 0;
        _this.atkspd = 0;
        _this.resistFire = 0;
        _this.resistIce = 0;
        _this.resistLightning = 0;
        return _this;
    }
    Equipment.prototype.getStr = function () { return this.str; };
    Equipment.prototype.getDex = function () { return this.dex; };
    Equipment.prototype.getIntel = function () { return this.intel; };
    Equipment.prototype.getVit = function () { return this.vit; };
    Equipment.prototype.getBlock = function () { return this.block; };
    Equipment.prototype.getDodge = function () { return this.dodge; };
    Equipment.prototype.getCrit = function () { return this.crit; };
    Equipment.prototype.getLifeSteal = function () { return this.lifesteal; };
    Equipment.prototype.getAttackSpeed = function () { return this.atkspd; };
    Equipment.prototype.getResistFire = function () { return this.resistFire; };
    Equipment.prototype.getResistIce = function () { return this.resistIce; };
    Equipment.prototype.getResistLightning = function () { return this.resistLightning; };
    Equipment.prototype.setStr = function (str) { this.str = str; };
    Equipment.prototype.setDex = function (dex) { this.dex = dex; };
    Equipment.prototype.setIntel = function (intel) { this.intel = intel; };
    Equipment.prototype.setVit = function (vit) { this.vit = vit; };
    Equipment.prototype.setBlock = function (block) { this.block = block; };
    Equipment.prototype.setDodge = function (dodge) { this.dodge = dodge; };
    Equipment.prototype.setCrit = function (crit) { this.crit = crit; };
    Equipment.prototype.setLifeSteal = function (lifesteal) { this.lifesteal = lifesteal; };
    Equipment.prototype.setAttackSpeed = function (atkspd) { this.atkspd = atkspd; };
    Equipment.prototype.setResistFire = function (resistFire) { this.resistFire = resistFire; };
    Equipment.prototype.setResistIce = function (resistIce) { this.resistIce = resistIce; };
    Equipment.prototype.setResistLightning = function (resistLightning) { this.resistLightning = resistLightning; };
    return Equipment;
}(Item));
//# sourceMappingURL=Equipment.js.map