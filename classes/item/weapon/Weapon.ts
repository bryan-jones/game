/**
 * Create a weapon class.
 */
class Weapon extends Item {
  protected name: string;
  protected damage: number;
  protected atkspd: number;
  protected block: number;

  /**
   * Constructor.
   */
  constructor() {
    super(name);
    this.damage = 0;
    this.atkspd = 1000;
    this.block = 0;
    this.type = 'weapon';
  }

  // Declare getters.
  getName() { return this.name }
  getDamage() { return this.damage }
  getAttackSpeed() { return this.atkspd }
  getBlock() { return this.block }
  
  // Declare setters.
  setName(name: string) { this.name = name }
  setDamage(damage: number) { this.damage = damage }
  setAttackSpeed(atkspd: number) { this.atkspd = atkspd }
  setBlock(block: number) { this.block = block }
};