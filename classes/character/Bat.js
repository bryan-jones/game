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
var Bat = (function (_super) {
    __extends(Bat, _super);
    function Bat(name) {
        var _this = _super.call(this, name) || this;
        _this.name = "Bat";
        _this.hp = 100;
        _this.maxHp = _this.hp;
        _this.str = 28;
        _this.dex = 150;
        _this.intel = 30;
        _this.vit = 20;
        _this.crit = 0;
        _this.exp = 10;
        _this.image = "./classes/character/bat.png";
        return _this;
    }
    return Bat;
}(Enemy));
;
//# sourceMappingURL=Bat.js.map