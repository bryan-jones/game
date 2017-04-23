/**
 * Create a spellblade class.
 */
class Spellblade extends Player {
  
  /**
   * Set some default stats based off of class.
   *
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 12;
    this.dex = 16;
    this.intel = 14;
    this.vit = 13;
    this.block = 0;
    this.crit = 2;
    this.dodge = 0;
    this.resistFire = 2;
    this.resistIce = 2;
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
      this.dex += 2;
      this.vit += 1;
      this.str += 1;

      // Every four levels gain an additional 1 to int and vit.
      if (this.level % 4 == 1) {
        this.intel += 1;
        this.vit += 1;
      } else if (this.level % 2 == 1) {
        // Every three levesl gain additional int.
        this.intel += 1;
      } else if (this.level % 2 == 1) {
        // Every other level gain additional dex, str, and vit.
        this.dex += 1;
        this.str += 1;
        this.vit += 1;
      }

      // Every 6 levels gain 1 to crit and 1 to all resistances.
      if (this.level % 6 == 0) {
        this.resistFire += 1;
        this.resistIce += 1;
        this.resistLightning += 1;
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
