BlockEvents.rightClicked('minecraft:cake', overEatCake);
BlockEvents.rightClicked('amendments:double_cake', overEatCake);

function overEatCake(event) {
  const { player, level, block } = event;

  // Check if the player is not sneaking and has full health and absorption less than 4 hearts)
  let absorptionHearts = player.getAbsorptionAmount();
  // allow player to eat to just refresh the duration of absorption
  let absorptionCanRefresh = (player.hasEffect('absorption')
    && player.getEffect('absorption').duration < (24000 - 1200) // one minute before the player can eat again to refresh absorption
    && absorptionHearts == 8 ) // if player has more absorption hearts from other source, cannot eat
  if (!player.isCrouching() 
    && !player.canEat(false)
    && player.health == player.maxHealth
    && ( absorptionHearts < 8 || absorptionCanRefresh) 
  ) {
    if (absorptionCanRefresh) {
      player.removeEffect('absorption') // remove potential higher tier absorption from enchanted golden apples so that it can be overriden with lower tier but longer duration
    }
    player.potionEffects.add('absorption', 24000, 1, false, false) // Absorption I (4 hearts max) for (20:00 minutes)
    player.setAbsorptionAmount(Math.min(absorptionHearts+1, 8))

    let bites = parseInt(block.properties.get('bites')) + 1;
    if (bites < 7) {
        block.set(block.id, { 'bites': String(bites) });
    } else {
      if (block.id == 'minecraft:cake') {
        block.set('minecraft:air'); // Cake is fully consumed
      } else if (block.id == 'amendments:double_cake') {
        block.set('minecraft:cake');
      }
        
    }
    
    level.playSound(null, player.x, player.y, player.z, 'minecraft:entity.player.burp', 'players', 1, 1)
    event.cancel()
  }

}