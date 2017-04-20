/**
 * Create a champion class.
 */
class Champion extends Player {
  
  /**
   * Set some default stats based off of class.
   * 
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 15;
    this.dex = 14;
    this.intel = 11;
    this.vit = 14;
    this.block = 2;
    this.crit = 0;
    this.dodge = 1;
    this.resistFire = 1;
    this.resistIce = 1;
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
      this.str += 2;
      this.intel += 1;
      this.dex += 1;
      this.vit += 1;

      // Dexterity and vitility increase by 2 every other level.
      if (this.level % 2 == 1) {
        this.vit += 1;
        this.dex += 1;
      } else if (this.level % 3 == 1) {
        // Every three levels also add 2 dex and an additional 1 str.
        this.dex += 2;
        this.vit += 2;
      } else {
        this.intel += 1;
      }

      // Every 4 levels the Berserker gains 1 crit.
      if (this.level % 4 == 0) {
        this.block += 1;
      }

      // Every 6 levels the Berserker gains 1 dodge.
      if (this.level % 6 == 0) {
        this.resistFire += 1;
        this.resistIce += 1;
      }

      // Every 8 levels the Berserker gains 1 to all resist.
      if (this.level % 8 == 0) {
        this.resistLightning += 1;
        this.dodge += 1;
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
