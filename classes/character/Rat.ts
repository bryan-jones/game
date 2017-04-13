/**
 * Create a class for rats.
 */
class Rat extends Enemy {

  /**
   * Constructor.
   * 
   * @param name string
   */
    constructor() {
    super(name);
    this.name = 'Rat';
    this.hp = 200;
    this.maxHp = this.hp;
    this.str = 28;
    this.dex = 50;
    this.intel = 1;
    this.vit = 2;
    this.crit = 0;
    this.exp = 20;
    this.image = "./classes/character/rat.png";
  }
};