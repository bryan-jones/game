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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(name) {
        var _this = _super.call(this, name) || this;
        _this.exp = 0;
        _this.maxExp = 100;
        return _this;
    }
    Player.prototype.getExp = function () { return this.exp; };
    Player.prototype.getMaxExp = function () { return this.maxExp; };
    Player.prototype.setStats = function (level, str, dex, intel, vit, armor, block, crit, resistFire, resistIce, resistLightning) {
        if (level === void 0) { level = 1; }
        if (str === void 0) { str = 10; }
        if (dex === void 0) { dex = 10; }
        if (intel === void 0) { intel = 10; }
        if (vit === void 0) { vit = 10; }
        if (armor === void 0) { armor = 0; }
        if (block === void 0) { block = 0; }
        if (crit === void 0) { crit = 0; }
        if (resistFire === void 0) { resistFire = 0; }
        if (resistIce === void 0) { resistIce = 0; }
        if (resistLightning === void 0) { resistLightning = 0; }
        this.level = level;
        this.str = str;
        this.dex = dex;
        this.intel = intel;
        this.vit = vit;
        this.block = block;
        this.armor = armor;
        this.crit = crit;
        this.resistFire = resistFire;
        this.resistIce = resistIce;
        this.resistLightning = resistLightning;
        this.hp = this.calculateHp();
        this.maxHp = this.calculateHp();
        this.mana = this.calculateMana();
        this.maxMana = this.calculateMana();
    };
    Player.prototype.setExp = function (exp) { this.exp = exp; };
    Player.prototype.setMaxExp = function (maxExp) { this.maxExp = maxExp; };
    Player.prototype.render = function () {
        var output = '<img src="' + this.image + '"/>'
            + '<p>Name: ' + this.name + '<br>'
            + 'HP: ' + this.hp + ' / ' + this.maxHp + '<br>'
            + 'Mana: ' + this.mana + ' / ' + this.maxMana + '<br>'
            + 'Str: ' + this.str + '<br>'
            + 'Dex: ' + this.dex + '<br>'
            + 'Int: ' + this.intel + '<br>'
            + 'Vit: ' + this.vit + '<br>'
            + '</p>';
        var container = document.getElementById('left');
        container.innerHTML = output;
    };
    Player.prototype.calculateHp = function () {
        var newHp = this.level * 100;
        newHp += this.vit * 4;
        newHp += this.str * 2;
        return newHp;
    };
    Player.prototype.calculateMana = function () {
        var newMana = this.level * 20;
        newMana += this.vit;
        newMana += this.intel * 4;
        return newMana;
    };
    Player.prototype.print = function () {
        return '<h1>' + this.name + '</h1>'
            + '<p>Level ' + this.level + '</p>'
            + '<p>HP ' + this.hp + '/' + this.maxHp + '</p>'
            + '<p>Mana ' + this.mana + '/' + this.maxMana + '</p>'
            + '<p>Str ' + this.str + '</p>'
            + '<p>Dex ' + this.dex + '</p>'
            + '<p>Int ' + this.intel + '</p>'
            + '<p>Vit ' + this.vit + '</p>'
            + '<br><p>Defense</p>'
            + '<p>Armor ' + this.armor + '</p>'
            + '<p>Block ' + this.block + '</p>'
            + '<br><p>Resistances</p>'
            + '<p>Fire ' + this.resistFire + '</p>'
            + '<p>Ice ' + this.resistIce + '</p>'
            + '<p>Lightning ' + this.resistLightning + '</p>'
            + '<p>Exp ' + this.exp + '/' + this.maxExp + '</p>';
    };
    return Player;
}(Character));
;
//# sourceMappingURL=Player.js.map