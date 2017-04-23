/**
 * Create a shiv class.
 */
class Shiv extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Shiv';
    this.damage = 2;
    this.atkspd = 1200;
    this.crit = 1;
  }
};

/**
 * Create a dagger class.
 */
class Dagger extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Dagger';
    this.damage = 3;
    this.atkspd = 1200;
    this.dodge = 1;
    this.crit = 1;
  }
};

/**
 * Create a great dagger class.
 */
class greatDagger extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Great Dagger';
    this.damage = 5;
    this.atkspd = 1200;
    this.dodge = 1;
    this.crit = 2;
  }
};

/**
 * Create a ancient dagger class.
 */
class ancientDagger extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Ancient Dagger';
    this.damage = 7;
    this.atkspd = 1200;
    this.dodge = 2;
    this.crit = 3;
  }
};

/**
 * Create a death dagger class.
 */
class deathDagger extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Death Dagger';
    this.damage = 5;
    this.atkspd = 1200;
    this.dodge = 2;
    this.crit = 8;
  }
};