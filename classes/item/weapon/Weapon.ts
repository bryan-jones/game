/**
 * Create a weapon class.
 */
class Weapon extends Item {
  protected name: string;
  protected damage: number;
  protected atkspd: number;
  protected str: number;
  protected dex: number;
  protected intel: number;
  protected vit: number;
  protected block: number;
  protected dodge: number;
  protected crit: number;

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
  getStr() { return this.str }
  getDex() { return this.dex }
  getIntel() { return this.intel }
  getVit() { return this.vit }
  getBlock() { return this.block }
  getDodge() { return this.dodge }
  getCrit() { return this.crit }

  // Declare setters.
  setName(name: string) { this.name = name }
  setDamage(damage: number) { this.damage = damage }
  setAttackSpeed(atkspd: number) { this.atkspd = atkspd }
  setStr(str: number) { this.str = str }
  setDex(dex: number) { this.dex = dex }
  setIntel(intel: number) { this.intel = intel }
  setVit(vit: number) { this.vit = vit }
  setBlock(block: number) { this.block = block }
  setDodge(dodge: number) { this.dodge = dodge }
  setCrit(crit: number) { this.crit = crit }
};