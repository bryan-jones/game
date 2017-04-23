/**
 * Create a bronze claws class.
 */
class bronzeClaws extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Bronze Claws';
    this.damage = 3;
    this.atkspd = 1600;
  }
};

/**
 * Create a long claws class.
 */
class longClaws extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Long Claws';
    this.damage = 4;
    this.atkspd = 1600;
    this.crit = 1;
  }
};

/**
 * Create a eviscirators class.
 */
class Eviscirators extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Eviscirators';
    this.damage = 10;
    this.atkspd = 2800;
    this.crit = 1;
  }
};
  
/**
 * Create a swift spikes class.
 */
class swiftSpikes extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Swift Spikes';
    this.damage = 6;
    this.atkspd = 1400;
    this.crit = 2;
    this.dodge = 1;
  }
};

/**
 * Create a ancient claws class.
 */
class ancientClaws extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Ancient Claws';
    this.damage = 9;
    this.atkspd = 1600;
    this.crit = 3;
    this.dodge = 2;
  }
};

/**
 * Create a platinum spikes class.
 */
class platinumSpikes extends Weapon {
  
  /**
   * Constructor.
   */
  constructor() {
    super();
    this.name = 'Platinum Spikes';
    this.damage = 10;
    this.atkspd = 1600;
    this.crit = 3;
    this.dodge = 3;
  }
};
