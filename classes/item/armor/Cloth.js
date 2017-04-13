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
var Cloth = (function (_super) {
    __extends(Cloth, _super);
    function Cloth() {
        var _this = _super.call(this) || this;
        _this.defense = 2;
        _this.resistIce = 3;
        _this.resistLightning = 1;
        return _this;
    }
    return Cloth;
}(Armor));
;
//# sourceMappingURL=Cloth.js.map