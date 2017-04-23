/**
 * Create a necromancer class.
 */
class Necromancer extends Player {
  
  /**
   * Set some default stats based off of class.
   * 
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 10;
    this.dex = 13;
    this.intel = 16;
    this.vit = 14;
    this.block = 0;
    this.crit = 0;
    this.dodge = 0;
    this.resistFire = 3;
    this.resistIce = 3;
    this.resistLightning = 3;

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

      // Every four levels gain an additional dex.
      if (this.level % 4 == 1) {
        this.dex += 1;
      } else if (this.level % 3 == 1) {
        // Every three levesl gain additional int and dex.
        this.intel += 1;
        this.dex += 1;
      }

      // Every 4 levels gain 1 to all resistances.
      if (this.level % 4 == 0) {
        this.resistFire += 1;
        this.resistIce += 1;
        this.resistLightning += 1;
      }

      // Every 6 levels gain 1 to crit.
      if (this.level % 6 == 0) {
        this.crit += 1;
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
