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
var Berserker = (function (_super) {
    __extends(Berserker, _super);
    function Berserker(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 18;
        _this.dex = 12;
        _this.intel = 10;
        _this.vit = 12;
        _this.block = 0;
        _this.crit = 3;
        _this.dodge = 1;
        _this.resistFire = 0;
        _this.resistIce = 0;
        _this.resistLightning = 0;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Berserker.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.str += 2;
            this.intel += 1;
            this.dex += 1;
            this.vit += 1;
            if (this.level % 2 == 1) {
                this.vit += 1;
                this.dex += 1;
            }
            else if (this.level % 3 == 1) {
                this.dex += 2;
                this.str += 2;
            }
            else {
            }
            if (this.level % 4 == 0) {
                this.crit += 1;
            }
            if (this.level % 6 == 0) {
                this.dodge += 1;
            }
            if (this.level % 8 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Berserker;
}(Player));
;
//# sourceMappingURL=Berserker.js.map