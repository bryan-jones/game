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
  }
};
