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
    this.hp = 180;
    this.maxHp = this.hp;
    this.str = 12;
    this.dex = 8;
    this.intel = 10;
    this.vit = 12;
    this.defense = 2;
    this.block = 0;
    this.crit = 0;
    this.exp = 150;
    this.image = "./classes/character/enemy/dwarf.jpg";
  }
};