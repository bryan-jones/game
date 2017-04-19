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
        _this.maxExp = 200;
        return _this;
    }
    Player.prototype.getExp = function () { return this.exp; };
    Player.prototype.getMaxExp = function () { return this.maxExp; };
    Player.prototype.setStats = function (level, str, dex, intel, vit, defense, block, crit, resistFire, resistIce, resistLightning) {
        if (level === void 0) { level = 1; }
        if (str === void 0) { str = 10; }
        if (dex === void 0) { dex = 10; }
        if (intel === void 0) { intel = 10; }
        if (vit === void 0) { vit = 10; }
        if (defense === void 0) { defense = 0; }
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
        this.defense = defense;
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
    Player.prototype.setArmor = function (armor) { this.armor = armor; };
    Player.prototype.setWeapon = function (weapon) { this.weapon = weapon; };
    Player.prototype.getExpPercent = function () {
        var exp = this.exp / this.maxExp;
        exp = Math.floor(exp * 100);
        if (exp < 0) {
            exp = 0;
        }
        return exp;
    };
    Player.prototype.equipWeapon = function (item) {
        if (item.getType() == 'weapon') {
            this.weapon = item;
        }
        else {
        }
    };
    Player.prototype.equipArmor = function (item) {
        if (item.getType() == 'armor') {
            this.armor = item;
        }
    };
    Player.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.str = 10 + newLevel * 2;
            this.dex = 10 + newLevel * 2;
            this.intel = 10 + newLevel * 2;
            this.vit = 10 + newLevel * 2;
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    Player.prototype.render = function () {
        var output = '<img src="' + this.image + '"/>'
            + '<p>Name: ' + this.name + '<br>'
            + 'HP: ' + this.hp + ' / ' + this.maxHp + '<br>'
            + 'Mana: ' + this.mana + ' / ' + this.maxMana + '<br>'
            + 'Str: ' + this.str + '<br>'
            + 'Dex: ' + this.dex + '<br>'
            + 'Int: ' + this.intel + '<br>'
            + 'Vit: ' + this.vit + '<br>'
            + 'Crit: ' + this.crit + '<br>'
            + 'Block: ' + this.block + '<br>'
            + 'Dodge: ' + this.dodge + '<br>'
            + 'Fire: ' + this.resistFire + '<br>'
            + 'Ice: ' + this.resistIce + '<br>'
            + 'Light: ' + this.resistLightning + '<br>'
            + '</p>';
        var container = document.getElementById('left');
        container.innerHTML = output;
    };
    Player.prototype.calculateHp = function () {
        var newHp = this.level * 30;
        newHp += this.vit * 20;
        return newHp;
    };
    Player.prototype.calculateMana = function () {
        var newMana = this.level * 20;
        newMana += this.vit;
        newMana += this.intel * 10;
        return newMana;
    };
    Player.prototype.calcDamage = function () {
        var damage = 0;
        damage = this.str;
        if (this.weapon) {
            damage += this.weapon.getDamage();
        }
        return damage;
    };
    Player.prototype.readjustStats = function () {
        this.strUp = this.str;
        this.strUp += this.weapon.getStr();
        this.strUp += this.armor.getStr();
        this.dexUp = this.dex;
        this.dexUp += this.weapon.getDex();
        this.dexUp += this.armor.getDex();
        this.intelUp = this.intel;
        this.intelUp += this.weapon.getIntel();
        this.intelUp += this.armor.getIntel();
        this.vitUp = this.vit;
        this.vitUp += this.weapon.getVit();
        this.vitUp += this.armor.getVit();
        this.blockUp = this.block;
        this.blockUp += this.weapon.getBlock();
        this.blockUp += this.armor.getBlock();
        this.dodgeUp = this.dodge;
        this.dodgeUp += this.weapon.getDodge();
        this.dodgeUp += this.armor.getDodge();
        this.critUp = this.crit;
        this.critUp += this.weapon.getCrit();
        this.critUp += this.armor.getCrit();
        this.resistFireUp = this.resistFire;
        this.resistFireUp += this.armor.getResistFire();
        this.resistIceUp = this.resistIce;
        this.resistIceUp += this.armor.getResistIce();
        this.resistLightningUp = this.resistLightning;
        this.resistLightningUp += this.armor.getResistLightning();
    };
    return Player;
}(Character));
;
//# sourceMappingURL=Player.js.map