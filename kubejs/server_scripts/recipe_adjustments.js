ServerEvents.recipes(recipe => {

  // golden tools have silk touch
  recipe.replaceOutput(
    { id: 'minecraft:golden_pickaxe' },
    'minecraft:golden_pickaxe',
    Item.of('minecraft:golden_pickaxe').enchant('minecraft:silk_touch', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:golden_axe' },
    'minecraft:golden_axe',
    Item.of('minecraft:golden_axe').enchant('minecraft:silk_touch', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:golden_shovel' },
    'minecraft:golden_shovel',
    Item.of('minecraft:golden_shovel').enchant('minecraft:silk_touch', 1)
  );
    recipe.replaceOutput(
    { id: 'minecraft:golden_hoe' },
    'minecraft:golden_hoe',
    Item.of('minecraft:golden_hoe').enchant('minecraft:silk_touch', 1)
  );

  // leather armor has feather falling and swift sneak
  recipe.replaceOutput(
    { id: 'minecraft:leather_boots' },
    'minecraft:leather_boots',
    Item.of('minecraft:leather_boots').enchant('minecraft:feather_falling', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:leather_leggings' },
    'minecraft:leather_leggings',
    Item.of('minecraft:leather_leggings').enchant('minecraft:swift_sneak', 2)
  );
  recipe.replaceOutput(
    { id: 'minecraft:leather_chestplate' },
    'minecraft:leather_chestplate',
    Item.of('minecraft:leather_chestplate').enchant('minecraft:feather_falling', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:leather_helmet' },
    'minecraft:leather_helmet',
    Item.of('minecraft:leather_helmet').enchant('minecraft:feather_falling', 1)
  );

  // iron armor has blast protection
  recipe.replaceOutput(
    { id: 'minecraft:iron_boots' },
    'minecraft:iron_boots',
    Item.of('minecraft:iron_boots').enchant('minecraft:blast_protection', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:iron_leggings' },
    'minecraft:iron_leggings',
    Item.of('minecraft:iron_leggings').enchant('minecraft:blast_protection', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:iron_chestplate' },
    'minecraft:iron_chestplate',
    Item.of('minecraft:iron_chestplate').enchant('minecraft:blast_protection', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:iron_helmet' },
    'minecraft:iron_helmet',
    Item.of('minecraft:iron_helmet').enchant('minecraft:blast_protection', 1)
  );

  // chainmail armor has projectile protection
  recipe.replaceOutput(
    { id: 'minecraft:chainmail_boots' },
    'minecraft:chainmail_boots',
    Item.of('minecraft:chainmail_boots').enchant('minecraft:projectile_protection', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:chainmail_leggings' },
    'minecraft:chainmail_leggings',
    Item.of('minecraft:chainmail_leggings').enchant('minecraft:projectile_protection', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:chainmail_chestplate' },
    'minecraft:chainmail_chestplate',
    Item.of('minecraft:chainmail_chestplate').enchant('minecraft:projectile_protection', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:chainmail_helmet' },
    'minecraft:chainmail_helmet',
    Item.of('minecraft:chainmail_helmet').enchant('minecraft:projectile_protection', 1)
  );

  // diamond armor has fire protection
  recipe.replaceOutput(
    { id: 'minecraft:diamond_boots' },
    'minecraft:diamond_boots',
    Item.of('minecraft:diamond_boots').enchant('minecraft:fire_protection', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:diamond_leggings' },
    'minecraft:diamond_leggings',
    Item.of('minecraft:diamond_leggings').enchant('minecraft:fire_protection', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:diamond_chestplate' },
    'minecraft:diamond_chestplate',
    Item.of('minecraft:diamond_chestplate').enchant('minecraft:fire_protection', 1)
  );
  recipe.replaceOutput(
    { id: 'minecraft:diamond_helmet' },
    'minecraft:diamond_helmet',
    Item.of('minecraft:diamond_helmet').enchant('minecraft:fire_protection', 1)
  );
})