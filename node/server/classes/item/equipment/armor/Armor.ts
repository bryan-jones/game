/**
 * Create an armor class.
 */
class Armor extends Equipment {
  protected defense: number;

  /**
   * Constructor.
   */
  constructor() {
    super();
  }

  // Declare getters.
  getDefense() { return this.defense }

  // Declare setters.
  setDefense(defense: number) { this.defense = defense }
};