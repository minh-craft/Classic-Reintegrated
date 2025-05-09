BlockEvents.rightClicked('minecraft:cake', overEatCake);
BlockEvents.rightClicked('amendments:double_cake', overEatCake);

function overEatCake(event) {
  const { player, level, block } = event;
  // Same checks as cake.js in server_scripts
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
    // make sure that blocks in hand don't get placed when eating cake in this custom function
    event.success()
  }
}

// BlockEvents.rightClicked('minecraft:cake', event => {
//   const { player, level, block } = event;
//   // Same checks as cake.js in server_scripts
//   // Check if the player is not sneaking and has full health and absorption less than 4 hearts)
//   let absorptionHearts = player.getAbsorptionAmount();
//   // allow player to eat to just refresh the duration of absorption
//   let absorptionCanRefresh = (player.hasEffect('absorption')
//     && player.getEffect('absorption').duration < (24000 - 1200) // one minute before the player can eat again to refresh absorption
//     && absorptionHearts == 8 ) // if player has more absorption hearts from other source, cannot eat
//   if (!player.isCrouching() 
//     && !player.canEat(false)
//     && player.health == player.maxHealth
//     && ( absorptionHearts < 8 || absorptionCanRefresh)
//   ) {
//     // make sure that blocks in hand don't get placed when eating cake in this custom function
//     event.success()
//   }

// });