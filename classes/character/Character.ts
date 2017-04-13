/**
 * Create a base character class.
 */
abstract class Character {
  protected name: string;
  protected level: number;
  protected maxHp: number;
  protected hp: number;
  protected maxMana: number;
  protected mana: number;
  protected str: number;
  protected dex: number;
  protected intel: number;
  protected vit: number;
  protected armor: number;
  protected block: number;
  protected dodge: number;
  protected resistFire: number;
  protected resistIce: number;
  protected resistLightning: number;
  protected crit: number;
  protected image: string;

  /**
   * Constructor.
   * 
   * @param name string
   */
  constructor(name:string) {
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
    this.armor = 0;
    this.block = 0;
    this.dodge = 0;
    this.resistFire = 0;
    this.resistIce = 0;
    this.resistLightning = 0;
    this.crit = 0;
    this.image = '';
  }

  // Declare getters.
  getName() { return this.name }
  getLevel() { return this.level }
  getMaxHp() { return this.maxHp }
  getHp() { return this.hp }
  getMaxMana() { return this.maxMana }
  getMana() { return this.mana }
  getStr() { return this.str }
  getDex() { return this.dex }
  getIntel() { return this.intel }
  getVit() { return this.vit }
  getArmor() { return this.armor }
  getBlock() { return this.block }
  getDodge() { return this.dodge }
  getResistFire() { return this.resistFire }
  getResistIce() { return this.resistIce }
  getResistLightning() { return this.resistLightning }
  getCrit() { return this.crit }
  getImage() { return this.image }

  // Declare setters.
  setStats( level: number = 1,
                      hp: number = 10,
                      mana: number = 10,
                      str: number = 2,
                      dex: number = 2,
                      intel: number = 2,
                      vit: number = 2,
                      armor: number = 0,
                      block: number = 0,
                      crit: number = 0,
                      resistFire: number = 0,
                      resistIce: number = 0,
                      resistLightning: number = 0 ) {
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
    this.armor = armor;
    this.crit = crit;
    this.resistFire = resistFire;
    this.resistIce = resistIce;
    this.resistLightning = resistLightning;
  }
  setName(name: string) { this.name = name }
  setLevel(level: number) { this.level = level }
  setMaxHp(maxHp: number) { this.maxHp = maxHp }
  setHp(hp: number) { this.hp = hp }
  setMaxMana(maxMana: number) { this.maxMana = maxMana }
  setMana(mana: number) { this.mana = mana }
  setStr(str: number) { this.str = str }
  setDex(dex: number) { this.dex = dex }
  setIntel(intel: number) { this.intel = intel }
  setVit(vit: number) { this.vit = vit }
  setArmor(armor: number) { this.armor = armor }
  setBlock(block: number) { this.block = block }
  setDodge(dodge: number) { this.dodge = dodge }
  setCrit(crit: number) { this.crit = crit }
  setResistFire(resistFire: number) { this.resistFire = resistFire }
  setResistIce(resistIce: number) { this.resistIce = resistIce }
  setResistLightning(resistLightning: number) { this.resistLightning = resistLightning }
  setImage(image: string) { this.image = image }

  /**
   * Attack functon that calculates damage done.
   */
  attack(target: Character) {
    // Was the target killed?
    var dead = 0;

    // was the attack blocked?
    var block = this.calcBlock(target);


    // Was the attack dodged?
    var dodge = this.calcDodge(target);

    if (!dodge && !block) {
      // Was it a critical hit?
      var crit = ' hit ';

      // Set base damage from strength.
      var damage = this.str;

      // Add a randomizer value.
      var random = Math.floor((Math.random() * (this.str * 2)) - this.str);
      random = Math.floor(random * 0.15);
      damage += random;

      // Adjust for defense.
      damage = this.calcDef(damage, target);

      // Check for a critical hit.
      var critHit = this.calcCrit(target);
      if (critHit) {
        crit = '<span class="crit"> CRITICALLY HIT </span>';
        damage *= 2;
      }

      // Now lets apply the damage to the target.
      var targetHp = target.getHp();
      targetHp -= damage;

      if (targetHp <= 0) {
        target.setHp(0);

        // The target has died.  
        dead = 1;
      } else {
        target.setHp(targetHp);
        dead = 0;
      }
      
      var output = '<p>' + this.name + crit + target.getName() + ' for ' + damage + ' damage!</p>';
      var container = document.getElementById('text');
      container.innerHTML += output;

      if (dead) {
        // The target has died.
        var output = '<p>' + target.getName() + ' has died</p>';
        container.innerHTML += output;
      }
    }

    if (dodge) {
      var output = '<p>' + this.name + ' attacks ' + target.getName() + ' but the attack was <span class="dodged">DODGED</span>!</p>';
      var container = document.getElementById('text');
      container.innerHTML += output;
    } else if (block) {
      var output = '<p>' + this.name + ' attacks ' + target.getName() + ' but the attack was <span class="blocked">BLOCKED</span>!</p>';
      var container = document.getElementById('text');
      container.innerHTML += output;
    }
    return dead;
  }

  /**
   * Calculate the characters chance to critically hit.
   * 
   * @param target Character
   *   The target that is being attacked.
   */
  calcCrit(target: Character) {
    var crit = 0;

    // Add to crit chance based off of dexterity.
    var userCrit =  this.crit + Math.floor(this.dex / 4);

    // Add in crit chance.
    var critChance = Math.floor((Math.random() * 100) + 1);
    
    console.log(this.name + ' crit chance = ' + userCrit);

    // Add natural armor reduction.
    var critChance = critChance - (target.getArmor() / 4);

    if (critChance <= userCrit) {
      crit = 1;
    }

    return crit;
  }

  /**
   * Calculate the attack damage after factoring in defense.
   * 
   * @param damage number
   *   The base damage of the attacker.
   * 
   * @param target Character
   *   The target that is being attacked.
   */
  calcDef(damage: number, target: Character) {
    // Armor reduces damage. 
    damage -= target.getArmor();

    // If damage is less than 1, set to 1.
    if (damage < 1) {
      damage = 1;
    }

    return damage;
  }

  /**
   * Calculate the characters chance to dodge.
   * 
   * @param target Character
   *   The target that is being attacked.
   */
  calcDodge(target: Character) {
    var dodge = 0;

    // Add in dodge chance.
    var dodgeChance = Math.floor(this.dex / 4);
    var dodgeRange = Math.floor((Math.random() * 100) + 1);
    
    // Now this chance is reduced by the opponent's dexterity.
    var reduction = dodgeChance - (target.getDex() / 4);
    dodgeChance -= reduction;

    // Dodge can not be higher than 75%.
    if (dodgeChance > 75) {
      dodgeChance = 75;
    }
    console.log(this.name + ' chance to be dodged = ' + dodgeChance);

    if (dodgeRange <= dodgeChance) {
       // The attack was dodged!
       dodge = 1;
    }

    return dodge;
  }

  /**
   * Calculate the characters chance to block.
   * 
   * @param target Character
   *   The target that is being attacked.
   */
  calcBlock(target: Character) {
    var block = 0;

    // Add in block chance.
    var blockChance = Math.floor(this.str / 4);
    var blockRange = Math.floor((Math.random() * 100) + 1);

    // Now this chance is reduced by the opponent's strength.
    var reduction = blockChance - (target.getStr() / 4);
    blockChance -= reduction;

    // Block can not be higher than 75%.
    if (blockChance > 75) {
      blockChance = 75;
    }

    console.log(this.name + ' chance to be blocked = ' + blockChance);

    if (blockRange <= blockChance) {
      block = 1;
    }
    return block;
  }
};