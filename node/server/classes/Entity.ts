/**
 * Create a base entity class.
 */
class Entity {
  protected name: string;
 
  /**
   * Constructor.
   */
  constructor(name: string) {
    this.name = '';
  }

  // Declare getters.
  getName() { return this.name }
  
  // Declare setters.
  setName(name: string) { this.name = name }
};