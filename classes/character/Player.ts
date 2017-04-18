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
  weapon: Weapon;
  armor: Armor;

  constructor(name: string) {
    super(name);
    this.exp = 0;
    this.maxExp = 1000;
  }

  // Declare getters.
  getExp() { return this.exp }
  getMaxExp() { return this.maxExp }

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
  getExpPercent() {
    var exp = this.exp / this.maxExp;
    exp = Math.floor(exp * 100);
    if (exp < 0) {
      exp = 0;
    }
    return exp;
  }

  /** 
   * Equip an item.
   */
  equipWeapon(item: Weapon) {
    // Determine the item type.
    if (item.getType() == 'weapon') {
      this.weapon = item;
    } else {
      // Display text saying item can not be equipped.
    }
  }

  equipArmor(item: Armor) {
    if (item.getType() == 'armor') {
      this.armor = item;
    }
  }

  /**
   * Render the character.
   */
  render() {
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
  }

  /**
   * Calculate HP based on vit and str.
   */
  calculateHp() {
    var newHp = this.level * 100;
    newHp += this.vit * 4;
    newHp += this.str * 2;
    return newHp;
  }

  /**
   * Calculate HP based on vit and str.
   */
  calculateMana() {
    var newMana = this.level * 20;
    newMana += this.vit;
    newMana += this.intel * 4;
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
    // Strength.
    this.strUp = this.str;
    this.strUp += this.weapon.getStr();
    this.strUp += this.armor.getStr();

    // Dexterity.
    this.dexUp = this.dex;
    this.dexUp += this.weapon.getDex();
    this.dexUp += this.armor.getDex();

    // Intelligence.
    this.intelUp = this.intel;
    this.intelUp += this.weapon.getIntel();
    this.intelUp += this.armor.getIntel();

    // Vitility.
    this.vitUp = this.vit;
    this.vitUp += this.weapon.getVit();
    this.vitUp += this.armor.getVit();

    // Block.
    this.blockUp = this.block;
    this.blockUp += this.weapon.getBlock();
    this.blockUp += this.armor.getBlock();

    // Dodge.
    this.dodgeUp = this.dodge;
    this.dodgeUp += this.weapon.getDodge();
    this.dodgeUp += this.armor.getDodge();

    // Crit.
    this.critUp = this.crit;
    this.critUp += this.weapon.getCrit();
    this.critUp += this.armor.getCrit();

    // Resistances.
    this.resistFireUp = this.resistFire;
    this.resistFireUp += this.armor.getResistFire();
    this.resistIceUp = this.resistIce;
    this.resistIceUp += this.armor.getResistIce();
    this.resistLightningUp = this.resistLightning;
    this.resistLightningUp += this.armor.getResistLightning();
  }
};
