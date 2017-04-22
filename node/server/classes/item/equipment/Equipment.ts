class Equipment extends Item {
  protected str: number;
  protected dex: number;
  protected intel: number;
  protected vit: number;
  protected block: number;
  protected dodge: number;
  protected crit: number;
  protected lifesteal: number;
  protected atkspd: number;
  protected resistFire: number;
  protected resistIce: number;
  protected resistLightning: number;

  /**
   * Constructor.
   */
  constructor() {
    super();
    this.str = 0;
    this.dex =  0;
    this.intel = 0;
    this.vit = 0;
    this.block = 0;
    this.dodge = 0;
    this.crit = 0;
    this.lifesteal = 0;
    this.atkspd = 0;
    this.resistFire = 0;
    this.resistIce = 0;
    this.resistLightning = 0;
  }

  // Getters.
  getStr() { return this.str }
  getDex() { return this.dex }
  getIntel() { return this.intel }
  getVit() { return this.vit }
  getBlock() { return this.block }
  getDodge() { return this.dodge }
  getCrit() { return this.crit }
  getLifeSteal() { return this.lifesteal }
  getAttackSpeed() { return this.atkspd }
  getResistFire() { return this.resistFire }
  getResistIce() { return this.resistIce }
  getResistLightning() { return this.resistLightning }

  // Setters.
  setStr(str: number) { this.str = str }
  setDex(dex: number) { this.dex = dex }
  setIntel(intel: number) { this.intel = intel }
  setVit(vit: number) { this.vit = vit }
  setBlock(block: number) { this.block = block }
  setDodge(dodge: number) { this.dodge = dodge }
  setCrit(crit: number) { this.crit = crit }
  setLifeSteal(lifesteal: number) { this.lifesteal = lifesteal }
  setAttackSpeed(atkspd: number) { this.atkspd = atkspd }
  setResistFire(resistFire: number) { this.resistFire = resistFire }
  setResistIce(resistIce: number) { this.resistIce = resistIce }
  setResistLightning(resistLightning: number) { this.resistLightning = resistLightning }
}