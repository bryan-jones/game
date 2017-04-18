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
    Character.prototype.attack = function (target) {
        var dead = 0;
        var block = this.calcBlock(target);
        var dodge = this.calcDodge(target);
        if (!dodge && !block) {
            var crit = ' hit ';
            var damage = this.calcDamage();
            var random = Math.floor((Math.random() * (this.str * 2)) - this.str);
            random = Math.floor(random * 0.15);
            damage += random;
            damage = this.calcDef(damage, target);
            var critHit = this.calcCrit(target);
            if (critHit) {
                crit = '<span class="crit"> CRITICALLY HIT </span>';
                damage *= 2;
            }
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
        console.log(this.name + ' crit chance = ' + userCrit);
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
        console.log(this.name + ' chance to be dodged = ' + dodgeChance);
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
        console.log(this.name + ' chance to be blocked = ' + blockChance);
        if (blockRange <= blockChance) {
            block = 1;
        }
        return block;
    };
    return Character;
}());
;
//# sourceMappingURL=Character.js.map