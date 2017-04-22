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
var Dwarf = (function (_super) {
    __extends(Dwarf, _super);
    function Dwarf() {
        var _this = _super.call(this, name) || this;
        _this.name = "Dwarf";
        _this.hp = 180;
        _this.maxHp = _this.hp;
        _this.str = 12;
        _this.dex = 8;
        _this.intel = 10;
        _this.vit = 12;
        _this.defense = 2;
        _this.block = 0;
        _this.crit = 0;
        _this.exp = 150;
        _this.image = "./classes/character/enemy/dwarf.jpg";
        return _this;
    }
    return Dwarf;
}(Enemy));
;
//# sourceMappingURL=Dwarf.js.map