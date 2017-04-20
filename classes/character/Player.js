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
    Player.prototype.getExpPercent = function () {
        var exp = this.exp / this.maxExp;
        exp = Math.floor(exp * 100);
        if (exp < 0) {
            exp = 0;
        }
        return exp;
    };
    Player.prototype.getMaxHp = function () { return this.maxHpUp; };
    Player.prototype.getMaxMana = function () { return this.maxManaUp; };
    Player.prototype.getStr = function () { return this.strUp; };
    Player.prototype.getDex = function () { return this.dexUp; };
    Player.prototype.getIntel = function () { return this.intelUp; };
    Player.prototype.getVit = function () { return this.vitUp; };
    Player.prototype.getDefense = function () { return this.defenseUp; };
    Player.prototype.getBlock = function () { return this.blockUp; };
    Player.prototype.getDodge = function () { return this.dodgeUp; };
    Player.prototype.getResistFire = function () { return this.resistFireUp; };
    Player.prototype.getResistIce = function () { return this.resistIceUp; };
    Player.prototype.getResistLightning = function () { return this.resistLightningUp; };
    Player.prototype.getCrit = function () { return this.critUp; };
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
    Player.prototype.equipWeapon = function (item) {
        this.weapon = item;
        this.readjustStats();
    };
    Player.prototype.equipArmor = function (item) {
        this.armor = item;
        this.readjustStats();
    };
    Player.prototype.render = function () {
        var output = '<img src="' + this.image + '"/>'
            + '<p>Name: ' + this.getName() + '<br>'
            + 'HP: ' + this.getHp() + ' / ' + this.getMaxHp() + '<br>'
            + 'Mana: ' + this.getMana() + ' / ' + this.getMaxMana() + '<br>'
            + 'Str: ' + this.getStr() + '<br>'
            + 'Dex: ' + this.getDex() + '<br>'
            + 'Int: ' + this.getIntel() + '<br>'
            + 'Vit: ' + this.getVit() + '<br>'
            + 'Crit: ' + this.getCrit() + '<br>'
            + 'Block: ' + this.getBlock() + '<br>'
            + 'Dodge: ' + this.getDodge() + '<br>'
            + 'Fire: ' + this.getResistFire() + '<br>'
            + 'Ice: ' + this.getResistIce() + '<br>'
            + 'Light: ' + this.getResistLightning() + '<br>'
            + '</p>';
        var container = document.getElementById('left');
        container.innerHTML = output;
    };
    Player.prototype.calculateHp = function () {
        var newHp = this.level * 30;
        if (this.vitUp) {
            newHp += this.vitUp * 20;
        }
        else {
            newHp += this.vit * 20;
        }
        return newHp;
    };
    Player.prototype.calculateMana = function () {
        var newMana = this.level * 20;
        if (this.intelUp) {
            newMana += this.intelUp * 10;
        }
        else {
            newMana += this.intel;
        }
        if (this.vitUp) {
            newMana += this.vitUp * 2;
        }
        else {
            newMana += this.vit * 2;
        }
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
        this.dexUp = this.dex;
        this.intelUp = this.intel;
        this.vitUp = this.vit;
        this.defenseUp = this.defense;
        this.blockUp = this.block;
        this.dodgeUp = this.dodge;
        this.critUp = this.crit;
        this.lifestealUp = this.lifesteal;
        this.resistFireUp = this.resistFire;
        this.resistIceUp = this.resistIce;
        this.resistLightningUp = this.resistLightning;
        if (typeof (this.weapon) !== 'undefined') {
            this.strUp += this.weapon.getStr();
            this.dexUp += this.weapon.getDex();
            this.intelUp += this.weapon.getIntel();
            this.vitUp += this.weapon.getVit();
            this.blockUp += this.weapon.getBlock();
            this.dodgeUp += this.weapon.getDodge();
            this.critUp += this.weapon.getCrit();
            this.lifestealUp += this.weapon.getLifeSteal();
            this.resistFireUp += this.weapon.getResistFire();
            this.resistIceUp += this.weapon.getResistIce();
            this.resistLightningUp += this.weapon.getResistLightning();
        }
        if (typeof (this.armor) !== 'undefined') {
            this.defenseUp += this.armor.getDefense();
            this.strUp += this.armor.getStr();
            this.dexUp += this.armor.getDex();
            this.intelUp += this.armor.getIntel();
            this.vitUp += this.armor.getVit();
            this.blockUp += this.armor.getBlock();
            this.dodgeUp += this.armor.getDodge();
            this.critUp += this.armor.getCrit();
            this.lifestealUp += this.weapon.getLifeSteal();
            this.resistFireUp += this.armor.getResistFire();
            this.resistIceUp += this.armor.getResistIce();
            this.resistLightningUp += this.armor.getResistLightning();
        }
        this.maxHpUp = this.calculateHp();
        this.maxManaUp = this.calculateMana();
        this.hp = this.maxHpUp;
        this.mana = this.maxManaUp;
    };
    return Player;
}(Character));
;
//# sourceMappingURL=Player.js.map