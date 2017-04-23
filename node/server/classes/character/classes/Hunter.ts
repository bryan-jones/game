/**
 * Create a hunter class.
 */
class Hunter extends Player {
  
  /**
   * Set some default stats based off of class.
   *
   
  Str + 3
  Dex + 5
  Int + 3
  Vit + 2
  Block + 0
  Dodge + 1
  Crit + 3
  Fire Resist + 0
	Ice Resist + 0
	Lightning Resist + 0

   * @param string name
   */
  constructor(name: string) {
    super(name);
    this.str = 13;
    this.dex = 15;
    this.intel = 13;
    this.vit = 12;
    this.block = 0;
    this.crit = 3;
    this.dodge = 1;
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
      this.str += 1;

      // Every four levels gain an additional 1 to int and vit.
      if (this.level % 4 == 1) {
        this.vit += 1;
        this.intel += 1;
        this.str += 1;
      } else if (this.level % 2 == 1) {
        // Every three levesl gain additional int.
        this.intel += 2;
        this.str += 2;
      } else if (this.level % 2 == 1) {
        // Every other level gain additional dex, str, and vit.
        this.dex += 1;
      }

      // Every 5 levels gain 1 to crit.
      if (this.level % 5 == 0) {
        this.crit += 1;
      }

      // Every 8 levels gain 1 to dodge and 1 to all resistances.
      if (this.level % 8 == 0) {
        this.resistFire += 1;
        this.resistIce += 1;
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
