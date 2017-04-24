/**
 * Create a hatchet class.
 */
class Hatchet extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Hatchet';
    this.damage = 3;
    this.atkspd = 1800;
  }
};

/**
 * Create an axe class.
 */
class Axe extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Axe';
    this.damage = 5;
    this.atkspd = 2000;
    this.crit = 1;
  }
};

/**
 * Create a large axe class.
 */
class largeAxe extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Large Axe';
    this.damage = 9;
    this.atkspd = 2400;
    this.block = 1;
    this.crit = 2;
  }
};

/**
 * Create a great axe class.
 */
class greatAxe extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Great Axe';
    this.damage = 12;
    this.atkspd = 2600;
    this.block = 2;
    this.crit = 2;
  }
};

/**
 * Create an ancient axe class.
 */
class ancientAxe extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Ancient Axe';
    this.damage = 15;
    this.atkspd = 2800;
    this.block = 2;
    this.crit = 3;
  }
};

/**
 * Create an frenzy axe class.
 */
class frenzyAxe extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Frenzy Axe';
    this.damage = 9;
    this.atkspd = 1800;
    this.block = 1;
    this.crit = 3;
  }
};