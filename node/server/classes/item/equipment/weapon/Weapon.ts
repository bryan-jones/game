/**
 * Create a weapon class.
 */
class Weapon extends Equipment {
  protected damage: number;
  
  /**
   * Constructor.
   */
  constructor() {
    super();
  }

  // Declare getters.
  getDamage() { return this.damage }

  // Declare setters.
  setDamage(damage: number) { this.damage = damage }
};