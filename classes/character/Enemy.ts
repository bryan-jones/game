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
};