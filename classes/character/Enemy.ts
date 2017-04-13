/**
 * Create a class for enemies.
 */
class Enemy extends Character {
  // Declares how much experience the enemy gives.
  protected exp: number;

  /**
   * Constructor.
   * 
   * @param name string
   */
    constructor(name:string) {
    super(name);

    this.exp = 0;
  }

  /**
   * Render the character.
   */
  render() {
    var output = '<img src="' + this.image + '"/>'
            + '<p>Name: ' + this.name + '<br>'
            + 'HP: ' + this.hp + ' / ' + this.maxHp + '<br>'
            + 'Str: ' + this.str + '<br>'
            + 'Dex: ' + this.dex + '<br>'
            + 'Int: ' + this.intel + '<br>'
            + 'Vit: ' + this.vit + '<br>'
            + '</p>';

    var container = document.getElementById('right');
    container.innerHTML = output;
  }

  // Declare getters.
  getExp() { return this.exp }

  // Declare getters.
  setExp(exp: number) { this.exp = exp }

/**
   * Calculate the attack damage after factoring in defense.
   * 
   * @param damage number
   *   The base damage of the attacker.
   * 
   * @param target Character
   *   The target that is being attacked.
   */
  calcDef(damage: number, target: Player) {
    // Armor reduces damage. 
    damage -= target.getDefense();

    damage -= target.armor.getDefense();

    // If damage is less than 1, set to 1.
    if (damage < 1) {
      damage = 1;
    }

    return damage;
  }
};