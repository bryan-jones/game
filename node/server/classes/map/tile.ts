/**
 * Create a base character class.
 */
class Tile {
  map: Map;
  posX: number;
  posY: number;
  image: string;
  type: number;

  /**
   * Constructor.
   */
  constructor() {
    this.map = null;
    this.posX = 1;
    this.posY = 1;
    this.image = '';
    this.type = 1;
  }

  // Declare getters.
  getMap() { return this.map }
  getPositionX() { return this.posX }
  getPositionY() { return this.posY }
  getImage() { return this.image }
  getType() { return this.type }
  
  // Declare setters.
  setStats( map: Map = null,
            posX: number = 1,
            posY: number = 1,
            image: string = '',
            type: number = 2 ) {
    this.map = map;
    this.posX = posX;
    this.posY = posY;
    this.image = image;
    this.type = type;
  }
  setMap(map: Map) { this.map = map }
  setPositionX(posX: number) { this.posX = posX }
  setPositionY(posY: number) { this.posY = posY }
  setImage(image: string) { this.image = image }
  setType(type: number) { this.type = type }
};