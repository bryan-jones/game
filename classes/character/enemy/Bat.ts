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
    this.hp = 40;
    this.maxHp = this.hp;
    this.str = 6;
    this.dex = 12;
    this.intel = 4;
    this.vit = 4;
    this.crit = 0;
    this.dodge = 20;
    this.exp = 10;
    this.image = "./classes/character/enemy/bat.png";
  }
};