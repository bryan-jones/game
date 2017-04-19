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
var Champion = (function (_super) {
    __extends(Champion, _super);
    function Champion(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 15;
        _this.dex = 14;
        _this.intel = 11;
        _this.vit = 14;
        _this.block = 2;
        _this.crit = 0;
        _this.dodge = 1;
        _this.resistFire = 1;
        _this.resistIce = 1;
        _this.resistLightning = 0;
        return _this;
    }
    return Champion;
}(Player));
;
//# sourceMappingURL=Champion.js.map