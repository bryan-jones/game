/**
 * Create a base item class.
 */
class Item {
  protected name: string;
  protected type: string;
 
  /**
   * Constructor.
   */
  constructor(name: string) {
    this.name = '';
    this.type = '';
  }

  // Declare getters.
  getName() { return this.name }
  getType() { return this.type }
  
  // Declare setters.
  setName(name: string) { this.name = name }
  setType(type: string) { this.type = type }
};