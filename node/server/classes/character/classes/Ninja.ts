/**
 * Create a ninja class.
 */
class Ninja extends Player {
  
  /**
   * Set some default stats based off of class.
   * 
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 16;
    this.dex = 16;
    this.intel = 11;
    this.vit = 11;
    this.block = 0;
    this.crit = 2;
    this.dodge = 2;
    this.resistFire = 0;
    this.resistIce = 0;
    this.resistLightning = 0;

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
      this.intel += 1;
      this.dex += 2;
      this.vit += 1;
      this.str += 2;

      // Every four levels gain an additional 2 to dex and vit.
      if (this.level % 4 == 1) {
        this.intel += 1;
      } else if (this.level % 2 == 1) {
        // Every three levesl gain additional int.
        this.intel += 1;
      } else if (this.level % 2 == 1) {
        // Every other level gain additional dex.
        this.dex += 1;
        this.str += 1;
        this.vit += 1;
      }

      // Every 5 levels gain 1 to dodge and crit.
      if (this.level % 5 == 0) {
        this.dodge += 1;
        this.crit += 1;
      }

      // Every 7 levels gain 1 to all resistances.
      if (this.level % 7 == 0) {
        this.resistFire += 1;
        this.resistIce += 1;
        this.resistLightning += 1;
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
