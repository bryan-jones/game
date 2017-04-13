/**
 * Create a class for bats.
 */
class Bat extends Enemy {

  /**
   * Constructor.
   * 
   * @param name string
   */
    constructor(name:string) {
    super(name);
    this.name = "Bat";
    this.hp = 100;
    this.maxHp = this.hp;
    this.str = 28;
    this.dex = 150;
    this.intel = 30;
    this.vit = 20;
    this.crit = 0;
    this.exp = 10;
    this.image = "./classes/character/bat.png";
  }
};