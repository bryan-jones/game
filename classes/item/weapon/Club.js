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
var Club = (function (_super) {
    __extends(Club, _super);
    function Club() {
        var _this = _super.call(this) || this;
        _this.name = 'Club';
        _this.damage = 4;
        return _this;
    }
    return Club;
}(Weapon));
;
//# sourceMappingURL=Club.js.map