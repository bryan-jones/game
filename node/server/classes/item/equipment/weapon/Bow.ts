/**
 * Create a short bow class.
 */
class shortBow extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Short Bow';
    this.damage = 2;
    this.atkspd = 2200;
    this.crit = 1;
  }
};

/**
 * Create a Long Bow class.
 */
class longBow extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Long Bow';
    this.damage = 4;
    this.atkspd = 2200;
    this.crit = 2;
  }
};

/**
 * Create a heavy bow class.
 */
class heavyBow extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Heavy Bow';
    this.damage = 7;
    this.atkspd = 2200;
    this.crit = 3;
  }
};

/**
 * Create a composite bow class.
 */
class compositeBow extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Composite Bow';
    this.damage = 6;
    this.atkspd = 1800;
    this.crit = 3;
  }
};

/**
 * Create a crossbow class.
 */
class Crossbow extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Crossbow';
    this.damage = 12;
    this.atkspd = 3000;
    this.crit = 3;
  }
};

/**
 * Create a pure bow class.
 */
class pureBow extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Pure Bow';
    this.damage = 10;
    this.atkspd = 1800;
    this.crit = 5;
  }
};