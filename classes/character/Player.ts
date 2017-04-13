/**
 * Create a player class.
 */
class Player extends Character {
  private exp: number;
  private maxExp: number;
  weapon: Weapon;
  armor: Armor;

  constructor(name: string) {
    super(name);
    this.exp = 0;
    this.maxExp = 100;
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

  print() {
    return '<h1>' + this.name + '</h1>' 
         + '<p>Level ' + this.level + '</p>'
         + '<p>HP ' + this.hp + '/' + this.maxHp + '</p>'
         + '<p>Mana ' + this.mana + '/' + this.maxMana + '</p>'
         + '<p>Str ' + this.str + '</p>'
         + '<p>Dex ' + this.dex + '</p>'
         + '<p>Int ' + this.intel + '</p>'
         + '<p>Vit ' + this.vit + '</p>'
         + '<br><p>Defense</p>'
         + '<p>Defense ' + this.defense + '</p>'
         + '<p>Block ' + this.block + '</p>'
         + '<br><p>Resistances</p>'
         + '<p>Fire ' + this.resistFire + '</p>'
         + '<p>Ice ' + this.resistIce + '</p>'
         + '<p>Lightning ' + this.resistLightning + '</p>'
         + '<p>Exp ' + this.exp + '/' + this.maxExp + '</p>';
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
};
