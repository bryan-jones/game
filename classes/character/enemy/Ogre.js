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
var Ogre = (function (_super) {
    __extends(Ogre, _super);
    function Ogre() {
        var _this = _super.call(this, name) || this;
        _this.name = 'Ogre';
        _this.hp = 270;
        _this.maxHp = _this.hp;
        _this.str = 10;
        _this.dex = 2;
        _this.intel = 1;
        _this.vit = 12;
        _this.defense = 0;
        _this.resistFire = 10;
        _this.resistLightning = -5;
        _this.crit = 0;
        _this.exp = 80;
        _this.image = "./classes/character/enemy/ogre.jpg";
        return _this;
    }
    return Ogre;
}(Enemy));
;
//# sourceMappingURL=Ogre.js.map