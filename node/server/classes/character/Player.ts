/**
 * Create a player class.
 */
class Player extends Character {
  protected exp: number;
  protected maxExp: number;

  // Create new variables for stats that have been adjusted.
  protected maxHpUp: number;
  protected maxManaUp: number;
  protected strUp: number;
  protected dexUp: number;
  protected intelUp: number;
  protected vitUp: number;
  protected defenseUp: number;
  protected blockUp: number;
  protected dodgeUp: number;
  protected critUp: number;
  protected resistFireUp: number;
  protected resistIceUp: number;
  protected resistLightningUp: number;
  protected lifestealUp: number;
  weapon: Weapon;
  armor: Armor;

  constructor(name: string) {
    super(name);
    this.exp = 0;
    this.maxExp = 200;
  }

  // Declare getters.
  getExp() { return this.exp }
  getMaxExp() { return this.maxExp }
  getExpPercent() {
    var exp = this.exp / this.maxExp;
    exp = Math.floor(exp * 100);
    if (exp < 0) {
      exp = 0;
    }
    return exp;
  }
  getMaxHp() { return this.maxHpUp }
  getMaxMana() { return this.maxManaUp }
  getStr() { return this.strUp }
  getDex() { return this.dexUp }
  getIntel() { return this.intelUp }
  getVit() { return this.vitUp }
  getDefense() { return this.defenseUp }
  getBlock() { return this.blockUp }
  getDodge() { return this.dodgeUp }
  getResistFire() { return this.resistFireUp }
  getResistIce() { return this.resistIceUp }
  getResistLightning() { return this.resistLightningUp }
  getCrit() { return this.critUp }

  // Declare setters.
  setStats( level: number = 1,
            str: number = 10,
            dex: number = 10,
            intel: number = 10,
            vit: number = 10,
            defense: number = 0,
            block: number = 0,
            crit: number = 0,
            resistFire: number = 0,
            resistIce: number = 0,
            resistLightning: number = 0 ) {
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
  }
  setExp(exp: number) { this.exp = exp }
  setMaxExp(maxExp: number) { this.maxExp = maxExp }
  setArmor(armor: Armor) { this.armor = armor }
  setWeapon(weapon: Weapon) { this.weapon = weapon }

  /** 
   * Equip an weapon.
   */
  equipWeapon(item: Weapon) {
    this.weapon = item;
    this.readjustStats();
  }

  /** 
   * Equip armor.
   */
  equipArmor(item: Armor) {
    this.armor = item;
    this.readjustStats();
  }

  /**
   * Render the character.
   */
  render() {
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
  }

  /**
   * Calculate HP based on vit and str.
   */
  calculateHp() {
    var newHp = this.level * 30;
    if (this.vitUp) {
      newHp += this.vitUp * 20;
    } else {
      newHp += this.vit * 20;
    }
    return newHp;
  }

  /**
   * Calculate HP based on vit and str.
   */
  calculateMana() {
    var newMana = this.level * 20;
    if (this.intelUp) {
      newMana += this.intelUp * 10;
    
    } else {
      newMana += this.intel;
    }

    if (this.vitUp) {
      newMana += this.vitUp * 2;
    } else {
      newMana += this.vit * 2;
    }
    
    return newMana;
  }

  calcDamage() {
    var damage = 0;
    damage = this.str;
    
    // Add weapon damage.
    if (this.weapon) {
      damage += this.weapon.getDamage();
    }
     
    return damage;
  }

  /**
   * Readjust all stats.
   */
  readjustStats() {
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

    // Adjust for weapon enhancements.
    if (typeof(this.weapon) !== 'undefined') {
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

    // Adjust for armor enhancements.
    if (typeof(this.armor) !== 'undefined') {
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
    
    // HP and Mana
    this.maxHpUp = this.calculateHp();
    this.maxManaUp = this.calculateMana();
    this.hp = this.maxHpUp;
    this.mana = this.maxManaUp;
  }
};
