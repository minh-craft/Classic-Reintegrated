LootJS.modifiers((event) => {
  // remove sheep drops - only shearing to get wool
  event
      .addEntityLootModifier("minecraft:sheep")
      .removeLoot(Ingredient.all);
});