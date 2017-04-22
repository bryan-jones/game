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
var Character = (function () {
    function Character(name) {
        this.name = name;
        this.level = 1;
        this.maxHp = 100;
        this.hp = 100;
        this.maxMana = 100;
        this.mana = 100;
        this.str = 10;
        this.dex = 10;
        this.intel = 10;
        this.vit = 10;
        this.defense = 0;
        this.block = 0;
        this.dodge = 0;
        this.resistFire = 0;
        this.resistIce = 0;
        this.resistLightning = 0;
        this.crit = 0;
        this.image = '';
        this.lifesteal = 0;
    }
    Character.prototype.getName = function () { return this.name; };
    Character.prototype.getLevel = function () { return this.level; };
    Character.prototype.getMaxHp = function () { return this.maxHp; };
    Character.prototype.getHp = function () { return this.hp; };
    Character.prototype.getMaxMana = function () { return this.maxMana; };
    Character.prototype.getMana = function () { return this.mana; };
    Character.prototype.getStr = function () { return this.str; };
    Character.prototype.getDex = function () { return this.dex; };
    Character.prototype.getIntel = function () { return this.intel; };
    Character.prototype.getVit = function () { return this.vit; };
    Character.prototype.getDefense = function () { return this.defense; };
    Character.prototype.getBlock = function () { return this.block; };
    Character.prototype.getDodge = function () { return this.dodge; };
    Character.prototype.getResistFire = function () { return this.resistFire; };
    Character.prototype.getResistIce = function () { return this.resistIce; };
    Character.prototype.getResistLightning = function () { return this.resistLightning; };
    Character.prototype.getCrit = function () { return this.crit; };
    Character.prototype.getImage = function () { return this.image; };
    Character.prototype.getHpPercent = function () {
        var health = this.hp / this.maxHp;
        health = Math.floor(health * 100);
        if (health < 0) {
            health = 0;
        }
        return health;
    };
    Character.prototype.getManaPercent = function () {
        var mana = this.mana / this.maxMana;
        mana = Math.floor(mana * 100);
        if (mana < 0) {
            mana = 0;
        }
        return mana;
    };
    Character.prototype.getLifeSteal = function () {
        return this.lifesteal;
    };
    Character.prototype.setStats = function (level, hp, mana, str, dex, intel, vit, defense, block, crit, resistFire, resistIce, resistLightning) {
        if (level === void 0) { level = 1; }
        if (hp === void 0) { hp = 10; }
        if (mana === void 0) { mana = 10; }
        if (str === void 0) { str = 2; }
        if (dex === void 0) { dex = 2; }
        if (intel === void 0) { intel = 2; }
        if (vit === void 0) { vit = 2; }
        if (defense === void 0) { defense = 0; }
        if (block === void 0) { block = 0; }
        if (crit === void 0) { crit = 0; }
        if (resistFire === void 0) { resistFire = 0; }
        if (resistIce === void 0) { resistIce = 0; }
        if (resistLightning === void 0) { resistLightning = 0; }
        this.level = level;
        this.hp = hp;
        this.maxHp = hp;
        this.mana = mana;
        this.maxMana = mana;
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
    };
    Character.prototype.setName = function (name) { this.name = name; };
    Character.prototype.setLevel = function (level) { this.level = level; };
    Character.prototype.setMaxHp = function (maxHp) { this.maxHp = maxHp; };
    Character.prototype.setHp = function (hp) { this.hp = hp; };
    Character.prototype.setMaxMana = function (maxMana) { this.maxMana = maxMana; };
    Character.prototype.setMana = function (mana) { this.mana = mana; };
    Character.prototype.setStr = function (str) { this.str = str; };
    Character.prototype.setDex = function (dex) { this.dex = dex; };
    Character.prototype.setIntel = function (intel) { this.intel = intel; };
    Character.prototype.setVit = function (vit) { this.vit = vit; };
    Character.prototype.setDefense = function (defense) { this.defense = defense; };
    Character.prototype.setBlock = function (block) { this.block = block; };
    Character.prototype.setDodge = function (dodge) { this.dodge = dodge; };
    Character.prototype.setCrit = function (crit) { this.crit = crit; };
    Character.prototype.setResistFire = function (resistFire) { this.resistFire = resistFire; };
    Character.prototype.setResistIce = function (resistIce) { this.resistIce = resistIce; };
    Character.prototype.setResistLightning = function (resistLightning) { this.resistLightning = resistLightning; };
    Character.prototype.setImage = function (image) { this.image = image; };
    Character.prototype.setLifeSteal = function (lifesteal) { this.lifesteal = lifesteal; };
    Character.prototype.attack = function (target) {
        var dead = 0;
        var block = this.calcBlock(target);
        var dodge = this.calcDodge(target);
        if (!dodge && !block) {
            var crit = ' hit ';
            var damage = this.calcDamage();
            console.log('1 - ' + damage);
            var random = Math.floor((Math.random() * (this.str * 2)) - this.str);
            random = Math.floor(random * 0.15);
            damage += random;
            console.log('2 - ' + damage);
            damage = this.calcDef(damage, target);
            console.log('3 - ' + damage);
            var critHit = this.calcCrit(target);
            if (critHit) {
                crit = '<span class="crit"> CRITICALLY HIT </span>';
                damage *= 2;
            }
            console.log('4 - ' + damage);
            var targetHp = target.getHp();
            targetHp -= damage;
            if (targetHp <= 0) {
                target.setHp(0);
                dead = 1;
            }
            else {
                target.setHp(targetHp);
                dead = 0;
            }
            var output = '<p>' + this.name + crit + target.getName() + ' for ' + damage + ' damage!</p>';
            var container = document.getElementById('text');
            container.innerHTML += output;
            if (dead) {
                var output = '<p>' + target.getName() + ' has died</p>';
                container.innerHTML += output;
            }
        }
        if (dodge) {
            var output = '<p>' + this.name + ' attacks ' + target.getName() + ' but the attack was <span class="dodged">DODGED</span>!</p>';
            var container = document.getElementById('text');
            container.innerHTML += output;
        }
        else if (block) {
            var output = '<p>' + this.name + ' attacks ' + target.getName() + ' but the attack was <span class="blocked">BLOCKED</span>!</p>';
            var container = document.getElementById('text');
            container.innerHTML += output;
        }
        return dead;
    };
    Character.prototype.calcDamage = function () {
        var damage = 0;
        damage = this.str;
        return damage;
    };
    Character.prototype.calcCrit = function (target) {
        var crit = 0;
        var userCrit = this.crit + Math.floor(this.dex / 4);
        var critChance = Math.floor((Math.random() * 100) + 1);
        var critChance = critChance - (target.getDefense() / 4);
        if (critChance <= userCrit) {
            crit = 1;
        }
        return crit;
    };
    Character.prototype.calcDef = function (damage, target) {
        damage -= target.getDefense();
        if (damage < 1) {
            damage = 1;
        }
        return damage;
    };
    Character.prototype.calcDodge = function (target) {
        var dodge = 0;
        var dodgeChance = this.dodge;
        dodgeChance += Math.floor(this.dex / 4);
        var dodgeRange = Math.floor((Math.random() * 100) + 1);
        var reduction = dodgeChance - (target.getDex() / 4);
        dodgeChance -= reduction;
        if (dodgeChance > 75) {
            dodgeChance = 75;
        }
        if (dodgeRange <= dodgeChance) {
            dodge = 1;
        }
        return dodge;
    };
    Character.prototype.calcBlock = function (target) {
        var block = 0;
        var blockChance = Math.floor(this.str / 4);
        var blockRange = Math.floor((Math.random() * 100) + 1);
        var reduction = blockChance - (target.getStr() / 4);
        blockChance -= reduction;
        if (blockChance > 75) {
            blockChance = 75;
        }
        if (blockRange <= blockChance) {
            block = 1;
        }
        return block;
    };
    Character.prototype.calcLifeSteal = function (target) {
    };
    return Character;
}());
;
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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(name) {
        var _this = _super.call(this, name) || this;
        _this.exp = 0;
        _this.maxExp = 200;
        _this.maxHpUp = 0;
        _this.maxManaUp = 0;
        _this.strUp = 0;
        _this.dexUp = 0;
        _this.intelUp = 0;
        _this.vitUp = 0;
        _this.defenseUp = 0;
        _this.blockUp = 0;
        _this.dodgeUp = 0;
        _this.critUp = 0;
        _this.resistFireUp = 0;
        _this.resistIceUp = 0;
        _this.resistLightningUp = 0;
        _this.lifestealUp = 0;
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
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(name) {
        var _this = _super.call(this, name) || this;
        _this.exp = 0;
        return _this;
    }
    Enemy.prototype.render = function () {
        var output = '<img src="' + this.image + '"/>'
            + '<p>Name: ' + this.name + '<br>'
            + 'HP: ' + this.hp + ' / ' + this.maxHp + '<br>'
            + 'Str: ' + this.str + '<br>'
            + 'Dex: ' + this.dex + '<br>'
            + 'Int: ' + this.intel + '<br>'
            + 'Vit: ' + this.vit + '<br>'
            + '</p>';
        var container = document.getElementById('right');
        container.innerHTML = output;
    };
    Enemy.prototype.getExp = function () { return this.exp; };
    Enemy.prototype.setExp = function (exp) { this.exp = exp; };
    Enemy.prototype.calcDef = function (damage, target) {
        damage -= target.getDefense();
        damage -= target.armor.getDefense();
        if (damage < 1) {
            damage = 1;
        }
        return damage;
    };
    return Enemy;
}(Character));
;
var Berserker = (function (_super) {
    __extends(Berserker, _super);
    function Berserker(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 18;
        _this.dex = 12;
        _this.intel = 10;
        _this.vit = 12;
        _this.block = 0;
        _this.crit = 3;
        _this.dodge = 1;
        _this.resistFire = 0;
        _this.resistIce = 0;
        _this.resistLightning = 0;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Berserker.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.str += 2;
            this.intel += 1;
            this.dex += 1;
            this.vit += 1;
            if (this.level % 2 == 1) {
                this.vit += 1;
                this.dex += 1;
            }
            else if (this.level % 3 == 1) {
                this.dex += 2;
                this.str += 2;
            }
            else {
            }
            if (this.level % 4 == 0) {
                this.crit += 1;
            }
            if (this.level % 6 == 0) {
                this.dodge += 1;
            }
            if (this.level % 8 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Berserker;
}(Player));
;
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
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Champion.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.str += 2;
            this.intel += 1;
            this.dex += 1;
            this.vit += 1;
            if (this.level % 2 == 1) {
                this.vit += 1;
                this.dex += 1;
            }
            else if (this.level % 3 == 1) {
                this.dex += 2;
                this.vit += 2;
            }
            else {
                this.intel += 1;
            }
            if (this.level % 4 == 0) {
                this.block += 1;
            }
            if (this.level % 6 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
            }
            if (this.level % 8 == 0) {
                this.resistLightning += 1;
                this.dodge += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Champion;
}(Player));
;
var Conqueror = (function (_super) {
    __extends(Conqueror, _super);
    function Conqueror(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 14;
        _this.dex = 12;
        _this.intel = 10;
        _this.vit = 16;
        _this.block = 1;
        _this.crit = 1;
        _this.dodge = 1;
        _this.resistFire = 2;
        _this.resistIce = 2;
        _this.resistLightning = 1;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Conqueror.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 1;
            this.dex += 1;
            this.vit += 2;
            this.str += 1;
            if (this.level % 4 == 1) {
                this.dex += 2;
                this.vit += 3;
                this.str += 2;
            }
            else if (this.level % 3 == 1) {
                this.vit += 1;
            }
            else if (this.level % 2 == 1) {
                this.str += 1;
            }
            if (this.level % 6 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
            }
            if (this.level % 7 == 0) {
                this.resistLightning += 1;
            }
            if (this.level % 8 == 0) {
                this.block += 1;
                this.crit += 1;
                this.dodge += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Conqueror;
}(Player));
;
var Knight = (function (_super) {
    __extends(Knight, _super);
    function Knight(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 14;
        _this.dex = 14;
        _this.intel = 11;
        _this.vit = 14;
        _this.block = 3;
        _this.crit = 0;
        _this.dodge = 0;
        _this.resistFire = 5;
        _this.resistIce = 5;
        _this.resistLightning = 5;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Knight.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 1;
            this.vit += 2;
            if (this.level % 2 == 1) {
                this.str += 2;
                this.dex += 2;
            }
            else if (this.level % 3 == 1) {
                this.str += 2;
                this.dex += 2;
                this.vit += 1;
            }
            else {
                this.dex += 1;
                this.str += 1;
            }
            if (this.level % 4 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
            }
            if (this.level % 5 == 0) {
                this.block += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Knight;
}(Player));
;
var Templar = (function (_super) {
    __extends(Templar, _super);
    function Templar(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 13;
        _this.dex = 14;
        _this.intel = 14;
        _this.vit = 12;
        _this.block = 2;
        _this.crit = 1;
        _this.dodge = 0;
        _this.resistFire = 4;
        _this.resistIce = 4;
        _this.resistLightning = 4;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Templar.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 1;
            this.dex += 1;
            this.vit += 1;
            this.str += 1;
            if (this.level % 4 == 1) {
                this.dex += 2;
                this.intel += 2;
                this.vit += 2;
                this.str += 2;
            }
            else if (this.level % 3 == 1) {
                this.dex += 1;
                this.intel += 1;
            }
            else if (this.level % 2 == 1) {
                this.vit += 1;
                this.str += 1;
            }
            if (this.level % 6 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
            }
            if (this.level % 7 == 0) {
                this.crit += 1;
                this.block += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Templar;
}(Player));
;
var Warrior = (function (_super) {
    __extends(Warrior, _super);
    function Warrior(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 16;
        _this.dex = 14;
        _this.intel = 11;
        _this.vit = 14;
        _this.block = 0;
        _this.crit = 1;
        _this.dodge = 0;
        _this.resistFire = 3;
        _this.resistIce = 2;
        _this.resistLightning = 1;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Warrior.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 1;
            if (this.level % 2 == 1) {
                this.str += 2;
                this.dex += 2;
                this.vit += 2;
            }
            else if (this.level % 3 == 1) {
                this.str += 4;
                this.dex += 2;
                this.vit += 2;
            }
            else {
                this.vit += 2;
                this.dex += 1;
                this.str += 1;
            }
            if (this.level % 4 == 0) {
                this.resistFire += 1;
            }
            if (this.level % 5 == 0) {
                this.resistIce += 1;
                this.crit += 1;
            }
            if (this.level % 5 == 0) {
                this.resistLightning += 1;
                this.block += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Warrior;
}(Player));
;
var Thief = (function (_super) {
    __extends(Thief, _super);
    function Thief(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 13;
        _this.dex = 16;
        _this.intel = 12;
        _this.vit = 12;
        _this.block = 0;
        _this.crit = 2;
        _this.dodge = 2;
        _this.resistFire = 0;
        _this.resistIce = 0;
        _this.resistLightning = 0;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Thief.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 1;
            this.dex += 2;
            this.vit += 1;
            this.str += 1;
            if (this.level % 4 == 1) {
                this.dex += 2;
                this.vit += 2;
                this.intel += 2;
            }
            else if (this.level % 2 == 1) {
                this.str += 2;
            }
            else if (this.level % 2 == 1) {
                this.dex += 1;
            }
            if (this.level % 4 == 0) {
                this.crit += 1;
                this.dodge += 1;
            }
            if (this.level % 8 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Thief;
}(Player));
;
var Monk = (function (_super) {
    __extends(Monk, _super);
    function Monk(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 13;
        _this.dex = 15;
        _this.intel = 14;
        _this.vit = 12;
        _this.block = 0;
        _this.crit = 1;
        _this.dodge = 4;
        _this.resistFire = 2;
        _this.resistIce = 2;
        _this.resistLightning = 2;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Monk.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 1;
            this.dex += 2;
            this.vit += 1;
            this.str += 1;
            if (this.level % 4 == 1) {
                this.vit += 2;
                this.intel += 1;
                this.str += 1;
            }
            else if (this.level % 3 == 1) {
                this.str += 1;
                this.intel += 1;
                this.vit += 1;
            }
            else if (this.level % 2 == 1) {
                this.dex += 1;
            }
            if (this.level % 3 == 0) {
                this.dodge += 1;
            }
            if (this.level % 5 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
                this.crit += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Monk;
}(Player));
;
var Assassin = (function (_super) {
    __extends(Assassin, _super);
    function Assassin(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 13;
        _this.dex = 15;
        _this.intel = 12;
        _this.vit = 12;
        _this.block = 0;
        _this.crit = 5;
        _this.dodge = 0;
        _this.resistFire = 1;
        _this.resistIce = 1;
        _this.resistLightning = 1;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Assassin.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 1;
            this.dex += 2;
            this.vit += 1;
            this.str += 1;
            if (this.level % 4 == 1) {
                this.dex += 1;
                this.vit += 2;
                this.intel += 2;
            }
            else if (this.level % 2 == 1) {
                this.str += 2;
            }
            else if (this.level % 2 == 1) {
                this.dex += 1;
            }
            if (this.level % 4 == 0) {
                this.crit += 2;
            }
            if (this.level % 6 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Assassin;
}(Player));
;
var Ninja = (function (_super) {
    __extends(Ninja, _super);
    function Ninja(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 16;
        _this.dex = 16;
        _this.intel = 11;
        _this.vit = 11;
        _this.block = 0;
        _this.crit = 2;
        _this.dodge = 2;
        _this.resistFire = 0;
        _this.resistIce = 0;
        _this.resistLightning = 0;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Ninja.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 1;
            this.dex += 2;
            this.vit += 1;
            this.str += 2;
            if (this.level % 4 == 1) {
                this.intel += 1;
            }
            else if (this.level % 2 == 1) {
                this.intel += 1;
            }
            else if (this.level % 2 == 1) {
                this.dex += 1;
                this.str += 1;
                this.vit += 1;
            }
            if (this.level % 5 == 0) {
                this.dodge += 1;
                this.crit += 1;
            }
            if (this.level % 7 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Ninja;
}(Player));
;
var Spellblade = (function (_super) {
    __extends(Spellblade, _super);
    function Spellblade(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 12;
        _this.dex = 16;
        _this.intel = 14;
        _this.vit = 13;
        _this.block = 0;
        _this.crit = 2;
        _this.dodge = 0;
        _this.resistFire = 2;
        _this.resistIce = 2;
        _this.resistLightning = 2;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Spellblade.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 2;
            this.dex += 2;
            this.vit += 1;
            this.str += 1;
            if (this.level % 4 == 1) {
                this.intel += 1;
                this.vit += 1;
            }
            else if (this.level % 2 == 1) {
                this.intel += 1;
            }
            else if (this.level % 2 == 1) {
                this.dex += 1;
                this.str += 1;
                this.vit += 1;
            }
            if (this.level % 6 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
                this.crit += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Spellblade;
}(Player));
;
var Hunter = (function (_super) {
    __extends(Hunter, _super);
    function Hunter(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 13;
        _this.dex = 15;
        _this.intel = 13;
        _this.vit = 12;
        _this.block = 0;
        _this.crit = 3;
        _this.dodge = 1;
        _this.resistFire = 0;
        _this.resistIce = 0;
        _this.resistLightning = 0;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Hunter.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 1;
            this.dex += 2;
            this.vit += 1;
            this.str += 1;
            if (this.level % 4 == 1) {
                this.vit += 1;
                this.intel += 1;
                this.str += 1;
            }
            else if (this.level % 2 == 1) {
                this.intel += 2;
                this.str += 2;
            }
            else if (this.level % 2 == 1) {
                this.dex += 1;
            }
            if (this.level % 5 == 0) {
                this.crit += 1;
            }
            if (this.level % 8 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
                this.dodge += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Hunter;
}(Player));
;
var Peltast = (function (_super) {
    __extends(Peltast, _super);
    function Peltast(name) {
        var _this = _super.call(this, name) || this;
        _this.str = 15;
        _this.dex = 15;
        _this.intel = 11;
        _this.vit = 12;
        _this.block = 0;
        _this.crit = 4;
        _this.dodge = 0;
        _this.resistFire = 1;
        _this.resistIce = 1;
        _this.resistLightning = 1;
        _this.maxHp = _this.calculateHp();
        _this.maxMana = _this.calculateMana();
        _this.hp = _this.maxHp;
        _this.mana = _this.maxMana;
        return _this;
    }
    Peltast.prototype.levelUp = function () {
        if (this.exp > this.maxExp) {
            this.level += 1;
            var extraExp = this.exp - this.maxExp;
            this.exp = extraExp;
            var newLevel = this.level - 1;
            this.intel += 1;
            this.dex += 2;
            this.vit += 1;
            this.str += 2;
            if (this.level % 4 == 1) {
                this.vit += 1;
            }
            else if (this.level % 3 == 1) {
                this.intel += 1;
                this.vit += 1;
            }
            else if (this.level % 2 == 1) {
            }
            if (this.level % 5 == 0) {
                this.crit += 1;
            }
            if (this.level % 10 == 0) {
                this.resistFire += 1;
                this.resistIce += 1;
                this.resistLightning += 1;
            }
            if (this.level % 10 == 0) {
                this.dodge += 1;
            }
            this.maxHp = this.calculateHp();
            this.hp = this.maxHp;
            this.maxMana = this.calculateMana();
            this.mana = this.maxMana;
            this.readjustStats();
        }
    };
    return Peltast;
}(Player));
;
var Rat = (function (_super) {
    __extends(Rat, _super);
    function Rat() {
        var _this = _super.call(this, name) || this;
        _this.name = 'Rat';
        _this.hp = 100;
        _this.maxHp = _this.hp;
        _this.str = 8;
        _this.dex = 10;
        _this.intel = 3;
        _this.vit = 4;
        _this.crit = 0;
        _this.exp = 20;
        _this.dodge = 10;
        _this.image = "./classes/character/enemy/rat.png";
        return _this;
    }
    return Rat;
}(Enemy));
;
var Bat = (function (_super) {
    __extends(Bat, _super);
    function Bat(name) {
        var _this = _super.call(this, name) || this;
        _this.name = "Bat";
        _this.hp = 40;
        _this.maxHp = _this.hp;
        _this.str = 6;
        _this.dex = 12;
        _this.intel = 4;
        _this.vit = 4;
        _this.crit = 0;
        _this.dodge = 20;
        _this.exp = 10;
        _this.image = "./classes/character/enemy/bat.png";
        return _this;
    }
    return Bat;
}(Enemy));
;
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
var Dwarf = (function (_super) {
    __extends(Dwarf, _super);
    function Dwarf() {
        var _this = _super.call(this, name) || this;
        _this.name = "Dwarf";
        _this.hp = 180;
        _this.maxHp = _this.hp;
        _this.str = 12;
        _this.dex = 8;
        _this.intel = 10;
        _this.vit = 12;
        _this.defense = 2;
        _this.block = 0;
        _this.crit = 0;
        _this.exp = 150;
        _this.image = "./classes/character/enemy/dwarf.jpg";
        return _this;
    }
    return Dwarf;
}(Enemy));
;
var Zombie = (function (_super) {
    __extends(Zombie, _super);
    function Zombie() {
        var _this = _super.call(this, name) || this;
        _this.name = "Zombie";
        _this.hp = 300;
        _this.maxHp = _this.hp;
        _this.str = 25;
        _this.dex = 18;
        _this.intel = 5;
        _this.vit = 30;
        _this.defense = 0;
        _this.block = 0;
        _this.crit = 0;
        _this.exp = 150;
        _this.image = "./classes/character/enemy/zombie.jpg";
        return _this;
    }
    return Zombie;
}(Enemy));
;
var Equipment = (function (_super) {
    __extends(Equipment, _super);
    function Equipment() {
        var _this = _super.call(this) || this;
        _this.str = 0;
        _this.dex = 0;
        _this.intel = 0;
        _this.vit = 0;
        _this.block = 0;
        _this.dodge = 0;
        _this.crit = 0;
        _this.lifesteal = 0;
        _this.atkspd = 0;
        _this.resistFire = 0;
        _this.resistIce = 0;
        _this.resistLightning = 0;
        return _this;
    }
    Equipment.prototype.getStr = function () { return this.str; };
    Equipment.prototype.getDex = function () { return this.dex; };
    Equipment.prototype.getIntel = function () { return this.intel; };
    Equipment.prototype.getVit = function () { return this.vit; };
    Equipment.prototype.getBlock = function () { return this.block; };
    Equipment.prototype.getDodge = function () { return this.dodge; };
    Equipment.prototype.getCrit = function () { return this.crit; };
    Equipment.prototype.getLifeSteal = function () { return this.lifesteal; };
    Equipment.prototype.getAttackSpeed = function () { return this.atkspd; };
    Equipment.prototype.getResistFire = function () { return this.resistFire; };
    Equipment.prototype.getResistIce = function () { return this.resistIce; };
    Equipment.prototype.getResistLightning = function () { return this.resistLightning; };
    Equipment.prototype.setStr = function (str) { this.str = str; };
    Equipment.prototype.setDex = function (dex) { this.dex = dex; };
    Equipment.prototype.setIntel = function (intel) { this.intel = intel; };
    Equipment.prototype.setVit = function (vit) { this.vit = vit; };
    Equipment.prototype.setBlock = function (block) { this.block = block; };
    Equipment.prototype.setDodge = function (dodge) { this.dodge = dodge; };
    Equipment.prototype.setCrit = function (crit) { this.crit = crit; };
    Equipment.prototype.setLifeSteal = function (lifesteal) { this.lifesteal = lifesteal; };
    Equipment.prototype.setAttackSpeed = function (atkspd) { this.atkspd = atkspd; };
    Equipment.prototype.setResistFire = function (resistFire) { this.resistFire = resistFire; };
    Equipment.prototype.setResistIce = function (resistIce) { this.resistIce = resistIce; };
    Equipment.prototype.setResistLightning = function (resistLightning) { this.resistLightning = resistLightning; };
    return Equipment;
}(Item));
var Armor = (function (_super) {
    __extends(Armor, _super);
    function Armor() {
        return _super.call(this) || this;
    }
    Armor.prototype.getDefense = function () { return this.defense; };
    Armor.prototype.setDefense = function (defense) { this.defense = defense; };
    return Armor;
}(Equipment));
;
var Cloth = (function (_super) {
    __extends(Cloth, _super);
    function Cloth() {
        var _this = _super.call(this) || this;
        _this.defense = 2;
        _this.resistIce = 0;
        _this.resistLightning = 0;
        return _this;
    }
    return Cloth;
}(Armor));
;
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon() {
        return _super.call(this) || this;
    }
    Weapon.prototype.getDamage = function () { return this.damage; };
    Weapon.prototype.setDamage = function (damage) { this.damage = damage; };
    return Weapon;
}(Equipment));
;
var Club = (function (_super) {
    __extends(Club, _super);
    function Club() {
        var _this = _super.call(this) || this;
        _this.name = 'Club';
        _this.damage = 3;
        _this.atkspd = 2000;
        return _this;
    }
    return Club;
}(Weapon));
;
var Mace = (function (_super) {
    __extends(Mace, _super);
    function Mace() {
        var _this = _super.call(this) || this;
        _this.name = 'Mace';
        _this.damage = 4;
        _this.atkspd = 2200;
        return _this;
    }
    return Mace;
}(Weapon));
;
var morningStar = (function (_super) {
    __extends(morningStar, _super);
    function morningStar() {
        var _this = _super.call(this) || this;
        _this.name = 'Morning Star';
        _this.damage = 8;
        _this.atkspd = 2200;
        _this.block = 1;
        return _this;
    }
    return morningStar;
}(Weapon));
;
var Flail = (function (_super) {
    __extends(Flail, _super);
    function Flail() {
        var _this = _super.call(this) || this;
        _this.name = 'Flail';
        _this.damage = 10;
        _this.atkspd = 2200;
        return _this;
    }
    return Flail;
}(Weapon));
;
var Maul = (function (_super) {
    __extends(Maul, _super);
    function Maul() {
        var _this = _super.call(this) || this;
        _this.name = 'Maul';
        _this.damage = 13;
        _this.atkspd = 2900;
        _this.block = 3;
        return _this;
    }
    return Maul;
}(Weapon));
;
var greatMaul = (function (_super) {
    __extends(greatMaul, _super);
    function greatMaul() {
        var _this = _super.call(this) || this;
        _this.name = 'Great Maul';
        _this.damage = 16;
        _this.atkspd = 3000;
        _this.block = 3;
        return _this;
    }
    return greatMaul;
}(Weapon));
;
//# sourceMappingURL=classes.js.map