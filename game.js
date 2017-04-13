$( document ).ready(function() {
  // Create a button that says "Fight".
  document.body.innerHTML = '<div id="left"></div>';
  document.body.innerHTML += '<div id="right"></div>';
  document.body.innerHTML += '<div id="button">Fight</div>';
  document.body.innerHTML += '<div id="text"></div>';

  // Create the player.
  var player = new Player('Bartuc');
  player.setStats(1, 60, 60, 60, 60);
  player.setImage('./classes/character/player.jpg');
  player.render();
  enemies = [];

  // Create an enemy.
  var rat = new Rat('Rat');
  enemies.push(rat);

  // Create an enemy.
  var bat = new Bat('Bat');
  enemies.push(bat);

  // Create an enemy.
  var ogre = new Ogre('Ogre');
  enemies.push(ogre);

  // Create an enemy.
  var dwarf = new Dwarf('Dwarf');
  enemies.push(dwarf);
  
  $('#button').click(function() {
    var end = 0;
    var enemyIndex = Math.floor(Math.random() * enemies.length);
    var enemy = enemies[enemyIndex];
    enemy.render();

    var container = document.getElementById('text');
    container.innerHTML = '';

    while (end == 0) {
      end = player.attack(enemy);
      if (end == 0) {
        end = enemy.attack(player);
      }
    }

    // Reset the enemy HP for testing.
    enemy.setHp(enemy.getMaxHp());
    player.setHp(player.getMaxHp());
  });
});