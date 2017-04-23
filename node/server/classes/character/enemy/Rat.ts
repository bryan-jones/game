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
    this.hp = 100;
    this.maxHp = this.hp;
    this.str = 8;
    this.dex = 10;
    this.intel = 3;
    this.vit = 4;
    this.crit = 0;
    this.exp = 20;
    this.dodge = 10;
    this.image = "./classes/character/enemy/rat.png";
  }
};