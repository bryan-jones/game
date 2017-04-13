/**
 * Create a class for ogre.
 */
class Ogre extends Enemy {

  /**
   * Constructor.
   * 
   * @param name string
   */
    constructor() {
    super(name);
    this.name = 'Ogre';
    this.hp = 600;
    this.maxHp = this.hp;
    this.str = 45;
    this.dex = 15;
    this.intel = 10;
    this.vit = 30;
    this.armor = 2;
    this.resistFire = 10;
    this.resistLightning = -5;
    this.crit = 0;
    this.exp = 80;
    this.image = "./classes/character/ogre.jpg";
  }
};