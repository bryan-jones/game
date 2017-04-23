/**
 * Create a peltast class.
 */
class Peltast extends Player {
  
  /**
   * Set some default stats based off of class.
   * 
   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 15;
    this.dex = 15;
    this.intel = 11;
    this.vit = 12;
    this.block = 0;
    this.crit = 4;
    this.dodge = 0;
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
      this.intel += 1;
      this.dex += 2;
      this.vit += 1;
      this.str += 2;

      // Every four levels gain an additional 2 to dex and vit.
      if (this.level % 4 == 1) {
        this.vit += 1;
      } else if (this.level % 3 == 1) {
        // Every three levesl gain additional int.
        this.intel += 1;
        this.vit +=1
      } else if (this.level % 2 == 1) {
        // Every other level gain additional dex.
      }

      // Every 5 levels gain 1 to crit.
      if (this.level % 5 == 0) {
        this.crit += 1;
      }

      // Every 6 levels gain 1 to all resistances.
      if (this.level % 10 == 0) {
        this.resistFire += 1;
        this.resistIce += 1;
        this.resistLightning += 1;
      }

      // Every 10 levels gain 1 dodge.
      if (this.level % 10 == 0) {

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
