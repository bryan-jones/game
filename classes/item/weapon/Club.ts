/**
 * Create a club class.
 */
class Club extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Club';
    this.damage = 3;
    this.atkspd = 2000;
  }
};

/**
 * Create a mace class.
 */
class Mace extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Mace';
    this.damage = 4;
    this.atkspd = 2200;
  }
};

/**
 * Create a morning star class.
 */
class morningStar extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Morning Star';
    this.damage = 8;
    this.atkspd = 2200;
    this.block = 1;
  }
};

/**
 * Create a flail class.
 */
class Flail extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Flail';
    this.damage = 10;
    this.atkspd = 2200;
  }
};

/**
 * Create a maul class.
 */
class Maul extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Maul';
    this.damage = 13;
    this.atkspd = 2900;
    this.block = 3;
  }
};

/**
 * Create a great maul class.
 */
class greatMaul extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Great Maul';
    this.damage = 16;
    this.atkspd = 3000;
    this.block = 3;
  }
};