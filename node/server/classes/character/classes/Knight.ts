/**
 * Create a knight class.
 */
class Knight extends Player {
  
  /**
   * Set some default stats based off of class.
   * 
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 14;
    this.dex = 14;
    this.intel = 11;
    this.vit = 14;
    this.block = 3;
    this.crit = 0;
    this.dodge = 0;
    this.resistFire = 5;
    this.resistIce = 5;
    this.resistLightning = 5;

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
      this.vit += 2;

      // Dexterity and strength increase by 2 every other level.
      if (this.level % 2 == 1) {
        this.str += 2;
        this.dex += 2;
      } else if (this.level % 3 == 1) {
        // Every three levels also add 2 dex and str and 3 vit.
        this.str += 2;
        this.dex += 2;
        this.vit += 1;
      } else {
        this.dex += 1;
        this.str += 1;
      }

      // Every 4 levels the Knight gains 1 to all resistance.
      if (this.level % 4 == 0) {
        this.resistFire += 1;
        this.resistIce += 1;
        this.resistLightning += 1;
      }

      // Every 5 levels the Knight gains 1 block.
      if (this.level % 5 == 0) {
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
