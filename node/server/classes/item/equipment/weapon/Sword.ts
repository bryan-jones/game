/**
 * Create a short sword class.
 */
class shortSword extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Short Sword';
    this.damage = 3;
    this.atkspd = 1600;
  }
};

/**
 * Create a long sword class.
 */
class longSword extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Long Sword';
    this.damage = 4;
    this.atkspd = 1600;
  }
};

/**
 */
class Scimitar extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Scimitar';
    this.damage = 5;
    this.atkspd = 1600;
    this.crit = 1;
  }
};

/**
 * Create a falchion class.
 */
class Falchion extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Falchion';
    this.damage = 8;
    this.atkspd = 2000;
    this.crit = 1;
  }
};

/**
 * Create a great sword class.
 */
class greatSword extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Great Sword';
    this.damage = 12;
    this.atkspd = 2500;
    this.block = 3;
    this.crit = 1;
  }
};

/**
 * Create a ancient sword class.
 */
class ancientSword extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Ancient Sword';
    this.damage = 10;
    this.atkspd = 1600;
    this.crit = 2;
  }
};

/**
 * Create a giant's sword class.
 */
class giantsSword extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Giant\'s Sword';
    this.crit = 2;
  }
};
