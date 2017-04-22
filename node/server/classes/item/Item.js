var Item = (function () {
    function Item() {
        this.name = '';
        this.type = '';
        this.image = '';
    }
    Item.prototype.getName = function () { return this.name; };
    Item.prototype.getType = function () { return this.type; };
    Item.prototype.getItem = function () { return this.image; };
    Item.prototype.setName = function (name) { this.name = name; };
    Item.prototype.setType = function (type) { this.type = type; };
    Item.prototype.setImage = function (image) { this.image = image; };
    return Item;
}());
;
//# sourceMappingURL=Item.js.map