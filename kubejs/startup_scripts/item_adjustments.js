ItemEvents.modification(event => {
  // diamond tools and armor have fire resistance
  event.modify('minecraft:diamond', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_block', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_ore', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:deepslate_diamond_ore', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_boots', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_leggings', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_chestplate', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_helmet', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_pickaxe', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_axe', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_shovel', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_hoe', item => {
    item.fireResistant = true
  });
  event.modify('minecraft:diamond_sword', item => {
    item.fireResistant = true
  });

  // crossbow and bow have no durability
  event.modify('minecraft:crossbow', item => {
    item.maxDamage = 0
  });
  event.modify('minecraft:bow', item => {
    item.maxDamage = 0;
  });
})