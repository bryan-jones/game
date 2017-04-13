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
        _this.hp = 100;
        _this.maxHp = _this.hp;
        _this.str = 8;
        _this.dex = 10;
        _this.intel = 3;
        _this.vit = 4;
        _this.crit = 0;
        _this.exp = 20;
        _this.dodge = 10;
        _this.image = "./classes/character/enemy/rat.png";
        return _this;
    }
    return Rat;
}(Enemy));
;
//# sourceMappingURL=Rat.js.map