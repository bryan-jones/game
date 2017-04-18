/**
 * Create an armor class.
 */
class Armor extends Item {
  protected name: string;
  protected str: number;
  protected dex: number;
  protected intel: number;
  protected vit: number;
  protected defense: number;
  protected resistFire: number;
  protected resistIce: number;
  protected resistLightning: number;
  protected block: number;
  protected dodge: number;
  protected crit: number;

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
  getStr() { return this.str }
  getDex() { return this.dex }
  getIntel() { return this.intel }
  getVit() { return this.vit }
  getDefense() { return this.defense }
  getBlock() { return this.block }
  getDodge() { return this.dodge }
  getCrit() { return this.crit }
  getResistFire() { return this.resistFire }
  getResistIce() { return this.resistIce }
  getResistLightning() { return this.resistLightning }
  
  // Declare setters.
  setName(name: string) { this.name = name }
  setStr(str: number) { this.str = str }
  setDex(dex: number) { this.dex = dex }
  setIntel(intel: number) { this.intel = intel }
  setVit(vit: number) { this.vit = vit }
  setDefense(defense: number) { this.defense = defense }
  setBlock(block: number) { this.block = block }
  setDodge(dodge: number) { this.dodge = dodge }
  setCrit(crit: number) { this.crit = crit }
  setResistFire(resistFire: number) { this.resistFire = resistFire }
  setResistIce(resistIce: number) { this.resistIce = resistIce }
  setResistLightning(resistLightning: number) { this.resistLightning = resistLightning }
};