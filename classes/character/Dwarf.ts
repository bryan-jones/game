/**
 * Create a class for rats.
 */
class Dwarf extends Enemy {

  /**
   * Constructor.
   * 
   * @param name string
   */
    constructor() {
    super(name);
    this.name = "Dwarf";
    this.hp = 400;
    this.maxHp = this.hp;
    this.str = 30;
    this.dex = 20;
    this.intel = 20;
    this.vit = 50;
    this.armor = 25;
    this.block = 5;
    this.crit = 0;
    this.exp = 150;
    this.image = "./classes/character/dwarf.jpg";
  }
};