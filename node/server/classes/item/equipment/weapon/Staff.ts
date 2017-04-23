/**
 * Create a broomstick class.
 */
class Broomstick extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Broomstick';
    this.damage = 2;
    this.atkspd = 2400;
  }
};

/**
 * Create a short staff class.
 */
class shortStaff extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Short Staff';
    this.damage = 3;
    this.atkspd = 2200;
  }
};

/**
 * Create a staff class.
 */
class Staff extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Staff';
    this.damage = 5;
    this.atkspd = 2400;
    this.block = 1;
  }
};

/**
 * Create a long staff class.
 */
class longStaff extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Long Staff';
    this.damage = 8;
    this.atkspd = 2600;
    this.block = 2;
    this.crit = 1;
    this.dodge = 1;
  }
};

/**
 * Create a monk staff class.
 */
class monkStaff extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Monk Staff';
    this.damage = 10;
    this.atkspd = 2200;
    this.block = 3;
    this.crit = 3;
    this.dodge = 3;
  }
};

/**
 * Create a great staff class.
 */
class greatStaff extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Great Staff';
    this.damage = 12;
    this.atkspd = 2600;
    this.block = 2;
    this.crit = 2;
    this.dodge = 1;
  }
};

/**
 * Create a Ancient Staff class.
 */
class ancientStaff extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Ancient Staff';
    this.damage = 15;
    this.atkspd = 2800;
    this.dodge = 2;
  }
};