/**
 * Create an armor class.
 */
class Armor extends Item {
  protected name: string;
  protected defense: number;
  protected resistFire: number;
  protected resistIce: number;
  protected resistLightning: number;

  /**
   * Constructor.
   */
  constructor() {
    super(name);
    this.defense = 0;
    this.resistFire = 0;
    this.resistIce = 0;
    this.resistLightning = 0;
    this.type = 'armor';
  }

  // Declare getters.
  getName() { return this.name }
  getDefense() { return this.defense }
  getResistFire() { return this.resistFire }
  getResistIce() { return this.resistIce }
  getResistLightning() { return this.resistLightning }
  
  // Declare setters.
  setName(name: string) { this.name = name }
  setDefense(defense: number) { this.defense = defense }
  setResistFire(resistFire: number) { this.resistFire = resistFire }
  setResistIce(resistIce: number) { this.resistIce = resistIce }
  setResistLightning(resistLightning: number) { this.resistLightning = resistLightning }
};