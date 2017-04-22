/**
 * Create a base item class.
 */
class Item {
  protected name: string;
  protected type: string;
  protected image: string;
 
  /**
   * Constructor.
   */
  constructor() {
    this.name = '';
    this.type = '';
    this.image = '';
  }

  // Declare getters.
  getName() { return this.name }
  getType() { return this.type }
  getItem() { return this.image }
  
  // Declare setters.
  setName(name: string) { this.name = name }
  setType(type: string) { this.type = type }
  setImage(image: string) { this.image = image }
};