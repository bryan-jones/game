/**
 * Create a warrior class.
 */
class Warrior extends Player {
  
  /**
   * Set some default stats based off of class.
   * 
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 16;
    this.dex = 14;
    this.intel = 11;
    this.vit = 14;
    this.block = 0;
    this.crit = 1;
    this.dodge = 0;
    this.resistFire = 3;
    this.resistIce = 2;
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
      this.intel += 1;

      // Dexterity and strength increase by 2 every other level.
      if (this.level % 2 == 1) {
        this.str += 2;
        this.dex += 2;
        this.vit += 2;
      } else if (this.level % 3 == 1) {
        // Every three levels also add 2 dex and vit and 4 str.
        this.str += 4;
        this.dex += 2;
        this.vit += 2;
      } else {
        this.vit += 2;
        this.dex += 1;
        this.str += 1;
      }

      // Every 4 levels the Warrior gains 1 to fire resist.
      if (this.level % 4 == 0) {
        this.resistFire += 1;
      }

      // Every 5 levels the Warrior gains 1 ice resist and 1 crit.
      if (this.level % 5 == 0) {
        this.resistIce += 1;
        this.crit += 1;
      }

      // Every 6 levels the KWarrior gains 1 lightning resist and 1 block.
      if (this.level % 5 == 0) {
        this.resistLightning += 1;
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
