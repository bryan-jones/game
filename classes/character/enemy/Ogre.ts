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
    this.hp = 300;
    this.maxHp = this.hp;
    this.str = 15;
    this.dex = 2;
    this.intel = 1;
    this.vit = 12;
    this.defense = 0;
    this.resistFire = 10;
    this.resistLightning = -5;
    this.crit = 0;
    this.exp = 80;
    this.image = "./classes/character/enemy/ogre.jpg";
  }
};