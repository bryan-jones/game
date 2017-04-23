/**
 * Create a small spear class.
 */
class smallSpear extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Small Spear';
    this.damage = 2;
    this.atkspd = 1800;
  }
};

/**
 * Create a light javelin class.
 */
class lightJavelin extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Light Javelin';
    this.damage = 4;
    this.atkspd = 1800;
  }
};

/**
 * Create a javelin class.
 */
class Javelin extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Javelin';
    this.damage = 5;
    this.atkspd = 2000;
    this.crit = 1;
  }
};

/**
 * Create a pilum class.
 */
class Pilum extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Pilum';
    this.damage = 6;
    this.atkspd = 2200;
    this.crit = 1;
    this.dodge = 2;
  }
};

/**
 * Create a throwing spear class.
 */
class throwingSpear extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Throwing Spear';
    this.damage = 9;
    this.atkspd = 2800;
    this.crit = 2;
    this.dodge = 2;
  }
};

/**
 * Create an ancient javelin class.
 */
class ancientJavelin extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Ancient Javelin';
    this.damage = 12;
    this.atkspd = 2200;
    this.crit = 3;
    this.dodge = 2;
  }
};
