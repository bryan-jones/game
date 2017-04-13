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
var Rat = (function (_super) {
    __extends(Rat, _super);
    function Rat() {
        var _this = _super.call(this, name) || this;
        _this.name = 'Rat';
        _this.hp = 200;
        _this.maxHp = _this.hp;
        _this.str = 28;
        _this.dex = 50;
        _this.intel = 1;
        _this.vit = 2;
        _this.crit = 0;
        _this.exp = 20;
        _this.image = "./classes/character/rat.png";
        return _this;
    }
    return Rat;
}(Enemy));
;
//# sourceMappingURL=Rat.js.map