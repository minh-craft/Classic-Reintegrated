EntityEvents.hurt((event) => {
  let player = event.entity;
  if (!player.isPlayer()) return; // Ensure it's a player taking damage

  // remove absorption effect once absorption hearts are gone
  if (player.absorptionAmount <= 0) {
    if (player.hasEffect('absorption')) {
      player.removeEffect('absorption')
    }
  }
});