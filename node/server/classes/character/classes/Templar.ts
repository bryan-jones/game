/**
 * Create a templar class.
 */
class Templar extends Player {
  
  /**
   * Set some default stats based off of class.
   * 
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 13;
    this.dex = 14;
    this.intel = 14;
    this.vit = 12;
    this.block = 2;
    this.crit = 1;
    this.dodge = 0;
    this.resistFire = 4;
    this.resistIce = 4;
    this.resistLightning = 4;
    
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
      this.dex += 1;
      this.vit += 1;
      this.str += 1;

      // Every four levels gain an additional 2 to all stats
      if (this.level % 4 == 1) {
        this.dex += 2;
        this.intel += 2;
        this.vit += 2;
        this.str += 2;
      } else if (this.level % 3 == 1) {
        // Every three levels gain an additional int and dex.
        this.dex += 1;
        this.intel += 1;
      } else if (this.level % 2 == 1) {
        // Every other level gain additional vit and str.
        this.vit += 1;
        this.str += 1;
      }

      // Every 6 levels the templar gains 1 to all resistance.
      if (this.level % 6 == 0) {
        this.resistFire += 1;
        this.resistIce += 1;
        this.resistLightning += 1;
      }

      // Every 7 levels the templar gains 1 crit, dodge, and block.
      if (this.level % 7 == 0) {
        this.crit += 1;
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
