/**
 * Create a cleric class.
 */
class Cleric extends Player {
  
  /**
   * Set some default stats based off of class.
   * 
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 12;
    this.dex = 12;
    this.intel = 14;
    this.vit = 15;
    this.block = 2;
    this.crit = 0;
    this.dodge = 0;
    this.resistFire = 2;
    this.resistIce = 4;
    this.resistLightning = 2;

    this.maxHp = this.calculateHp();
    this.maxMana = this.calculateMana();
    this.hp = this.maxHp;
    this.mana = this.maxMana;
  }

  levelUp() {
    if (this.exp > this.maxExp) {
      // Add a level and reset exp.
      this.level += 1;
      var extraExp = this.exp - this.maxExp;
      //this.maxExp += 1000;
      this.exp = extraExp;

      // Update base stats.
      var newLevel = this.level - 1;
      this.intel += 2;
      this.dex += 1;
      this.vit += 2;
      this.str += 1;

      // Every five levels gain an additional 2 to all stats.
      if (this.level % 5 == 1) {
        this.str += 1;
      } else if (this.level % 4 == 1) {
        // Every three levesl gain additional int and vit.
        this.str += 2;
        this.dex += 1;
        this.vit += 1;
      }

      // Every 4 levels gain 1 to all resistances.
      if (this.level % 4 == 0) {
        this.resistFire += 1;
        this.resistIce += 1;
        this.resistLightning += 1;
      }

      // Every 6 levels gain 1 to ice resist.
      if (this.level % 6 == 0) {
        this.resistIce += 1;
        this.block += 1;
      }

      // Update health and mana.
      this.maxHp = this.calculateHp();
      this.hp = this.maxHp;
      this.maxMana = this.calculateMana();
      this.mana = this.maxMana;

      // Readjust all stats.
      this.readjustStats();
    }
  }
};
