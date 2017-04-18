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
var Armor = (function (_super) {
    __extends(Armor, _super);
    function Armor() {
        var _this = _super.call(this, name) || this;
        _this.defense = 0;
        _this.resistFire = 0;
        _this.resistIce = 0;
        _this.resistLightning = 0;
        _this.type = 'armor';
        return _this;
    }
    Armor.prototype.getName = function () { return this.name; };
    Armor.prototype.getStr = function () { return this.str; };
    Armor.prototype.getDex = function () { return this.dex; };
    Armor.prototype.getIntel = function () { return this.intel; };
    Armor.prototype.getVit = function () { return this.vit; };
    Armor.prototype.getDefense = function () { return this.defense; };
    Armor.prototype.getBlock = function () { return this.block; };
    Armor.prototype.getDodge = function () { return this.dodge; };
    Armor.prototype.getCrit = function () { return this.crit; };
    Armor.prototype.getResistFire = function () { return this.resistFire; };
    Armor.prototype.getResistIce = function () { return this.resistIce; };
    Armor.prototype.getResistLightning = function () { return this.resistLightning; };
    Armor.prototype.setName = function (name) { this.name = name; };
    Armor.prototype.setStr = function (str) { this.str = str; };
    Armor.prototype.setDex = function (dex) { this.dex = dex; };
    Armor.prototype.setIntel = function (intel) { this.intel = intel; };
    Armor.prototype.setVit = function (vit) { this.vit = vit; };
    Armor.prototype.setDefense = function (defense) { this.defense = defense; };
    Armor.prototype.setBlock = function (block) { this.block = block; };
    Armor.prototype.setDodge = function (dodge) { this.dodge = dodge; };
    Armor.prototype.setCrit = function (crit) { this.crit = crit; };
    Armor.prototype.setResistFire = function (resistFire) { this.resistFire = resistFire; };
    Armor.prototype.setResistIce = function (resistIce) { this.resistIce = resistIce; };
    Armor.prototype.setResistLightning = function (resistLightning) { this.resistLightning = resistLightning; };
    return Armor;
}(Item));
;
//# sourceMappingURL=Armor.js.map