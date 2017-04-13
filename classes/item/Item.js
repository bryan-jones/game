var Item = (function () {
    function Item(name) {
        this.name = '';
        this.type = '';
    }
    Item.prototype.getName = function () { return this.name; };
    Item.prototype.getType = function () { return this.type; };
    Item.prototype.setName = function (name) { this.name = name; };
    Item.prototype.setType = function (type) { this.type = type; };
    return Item;
}());
;
//# sourceMappingURL=Item.js.map