/**
 * Create a base character class.
 */
class Map {
  protected name: string;

  /**
   * Constructor.a
   * 
   * @param name string
   */
  constructor(name: string = '') {
    this.name = name;
  }

  /**
   * Save a map.
   */
  save(name: string) {
    // Saving operations.
  }

  load(name: string) {
    // Loading operations.
  }
};