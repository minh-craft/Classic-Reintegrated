LootJS.modifiers((event) => {
  // remove sheep drops - only shearing to get wool
  event.addEntityLootModifier("minecraft:sheep").removeLoot(Ingredient.all);
  
  // remove seed drops from grass - only tilling to get seeds
  event.addBlockLootModifier("minecraft:grass").removeLoot("minecraft:wheat_seeds");
  event.addBlockLootModifier("minecraft:tall_grass").removeLoot("minecraft:wheat_seeds");
  event.addBlockLootModifier("minecraft:fern").removeLoot("minecraft:wheat_seeds");
  event.addBlockLootModifier("minecraft:large_fern").removeLoot("minecraft:wheat_seeds");

  // remove stick drops from leaves
  event.addBlockLootModifier("minecraft:acacia_leaves").removeLoot("minecraft:stick");
  event.addBlockLootModifier("minecraft:azalea_leaves").removeLoot("minecraft:stick");
  event.addBlockLootModifier("minecraft:birch_leaves").removeLoot("minecraft:stick");
  event.addBlockLootModifier("minecraft:cherry_leaves").removeLoot("minecraft:stick");
  event.addBlockLootModifier("minecraft:dark_oak_leaves").removeLoot("minecraft:stick");
  event.addBlockLootModifier("minecraft:flowering_azalea_leaves").removeLoot("minecraft:stick");
  event.addBlockLootModifier("minecraft:jungle_leaves").removeLoot("minecraft:stick");
  event.addBlockLootModifier("minecraft:mangrove_leaves").removeLoot("minecraft:stick");
  event.addBlockLootModifier("minecraft:oak_leaves").removeLoot("minecraft:stick");
  event.addBlockLootModifier("minecraft:spruce_leaves").removeLoot("minecraft:stick");

  // disable mob head drops
  event.disableWitherStarDrop();
  event.disableCreeperHeadDrop();
  event.disableSkeletonHeadDrop();
  event.disableZombieHeadDrop();
});