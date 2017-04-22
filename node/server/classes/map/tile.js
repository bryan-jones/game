var Tile = (function () {
    function Tile() {
        this.map = null;
        this.posX = 1;
        this.posY = 1;
        this.image = '';
        this.type = 1;
    }
    Tile.prototype.getMap = function () { return this.map; };
    Tile.prototype.getPositionX = function () { return this.posX; };
    Tile.prototype.getPositionY = function () { return this.posY; };
    Tile.prototype.getImage = function () { return this.image; };
    Tile.prototype.getType = function () { return this.type; };
    Tile.prototype.setStats = function (map, posX, posY, image, type) {
        if (map === void 0) { map = null; }
        if (posX === void 0) { posX = 1; }
        if (posY === void 0) { posY = 1; }
        if (image === void 0) { image = ''; }
        if (type === void 0) { type = 2; }
        this.map = map;
        this.posX = posX;
        this.posY = posY;
        this.image = image;
        this.type = type;
    };
    Tile.prototype.setMap = function (map) { this.map = map; };
    Tile.prototype.setPositionX = function (posX) { this.posX = posX; };
    Tile.prototype.setPositionY = function (posY) { this.posY = posY; };
    Tile.prototype.setImage = function (image) { this.image = image; };
    Tile.prototype.setType = function (type) { this.type = type; };
    return Tile;
}());
;
//# sourceMappingURL=tile.js.map