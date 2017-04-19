$( document ).ready(function() {
  // Initialize UI.
  initUI();

  // Create the player.
  var player = new Berserker('Bartuc');
  player.setImage('./classes/character/player.jpg');
  player.render();
  $('#user-name').text(player.getName());
  updateStats(player);

  // Create a club and equip it on the player.
  var club = new Club();
  player.equipWeapon(club);

  // Create some cloth armor and equip it.
  var cloth = new Cloth();
  player.equipArmor(cloth);

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
    if (player.getHp() > 0) {
      player.setExp(player.getExp() + enemy.getExp());
    } else {
      player.setExp(0);
    }

    updateStats(player);

    enemy.setHp(enemy.getMaxHp());
    player.setHp(player.getMaxHp());
  });
});

/**
 * Build the basic UI.
 */
function initUI() {
  // Create a button that says "Fight".
  document.body.innerHTML += '<div id="left"></div>';
  document.body.innerHTML += '<div id="right"></div>';
  document.body.innerHTML += '<div id="button">Fight</div>';
  document.body.innerHTML += '<div id="text"></div>';
}

function updateStats(player) {
  player.levelUp();
  player.render();
  $('#user-level').text(player.getLevel());
  $('#user-health').text(player.getHp() + ' / ' + player.getMaxHp());
  $('#user-mana').text(player.getMana() + ' / ' + player.getMaxMana());
  $('#user-experience').text('Exp: ' + player.getExp() + ' / ' + player.getMaxExp());
  $('#health-bar').css('width', player.getHpPercent() + '%');
  $('#mana-bar').css('width', player.getManaPercent() + '%');
  $('#experience-bar').css('width', player.getExpPercent() + '%');
}