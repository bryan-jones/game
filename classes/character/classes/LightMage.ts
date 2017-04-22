/**
 * Create a light mage class.
 */
class LightMage extends Player {
  
  /**
   * Set some default stats based off of class.
   * 
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 12;
    this.dex = 14;
    this.intel = 15;
    this.vit = 12;
    this.block = 1;
    this.crit = 1;
    this.dodge = 1;
    this.resistFire = 1;
    this.resistIce = 1;
    this.resistLightning = 1;

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
      this.vit += 1;
      this.str += 1;

      // Every four levels gain an additional str and vit.
      if (this.level % 4 == 0) {
        this.dex += 2;
        this.intel += 1;
      } else if (this.level % 3 == 0) {
        // Every three levels gain additional dex and vit.
        this.vit += 1;
        this.str += 1;
      } else if (this.level % 2 == 0) {
        this.dex += 1;
      }

      // Every 6 levels gain 1 to crit, dodge, block, and all resists.
      if (this.level % 6 == 0) {
        this.block += 1;
        this.crit += 1;
        this.dodge += 1;
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
