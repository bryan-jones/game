/**
 * Create a shadowcaster class.
 */
class Shadowcaster extends Player {
  
  /**
   * Set some default stats based off of class.
   * 
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 14;
    this.dex = 12;
    this.intel = 14;
    this.vit = 12;
    this.block = 0;
    this.crit = 1;
    this.dodge = 1;
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
      this.intel += 2;
      this.dex += 1;
      this.vit += 1;
      this.str += 2;

      // Every four levels gain an additional str and vit.
      if (this.level % 4 == 1) {

      } else if (this.level % 3 == 1) {
        // Every three levels gain additional dex and vit.
        this.dex += 1;
        this.vit += 1
      }

      // Every 4 levels gain 1 to all resistances.
      if (this.level % 4 == 0) {
        this.resistFire += 1;
      }

      // Every 6 levels gain 1 to crit, resist ice and lightning.
      if (this.level % 6 == 0) {
        this.crit += 1;
        this.dodge += 1;
        this.resistIce += 1;
      }

      // Every 8 levels gain 1 to fire resist and dodge.
      if (this.level % 8 == 0) {
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
