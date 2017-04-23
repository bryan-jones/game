/**
 * Create a class for zombie.
 */
class Zombie extends Enemy {

  /**
   * Constructor.
   * 
   * @param name string
   */
    constructor() {
    super(name);
    this.name = "Zombie";
    this.hp = 300;
    this.maxHp = this.hp;
    this.str = 25;
    this.dex = 18;
    this.intel = 5;
    this.vit = 30;
    this.defense = 0;
    this.block = 0;
    this.crit = 0;
    this.exp = 150;
    this.image = "./classes/character/enemy/zombie.jpg";
  }
};