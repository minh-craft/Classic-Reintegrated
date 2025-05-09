ItemEvents.tooltip(event => {
  // Add tooltip to all of these items
  event.add('minecraft:golden_apple', [
    Text.gray('Heals 10 ').append(Text.red('❤')),
    Text.blue('Absorption (2:00)'),
    Text.blue('Regeneration II (0:05)')
  ])
  event.add('minecraft:enchanted_golden_apple', [
    Text.gray('Heals 10 ').append(Text.red('❤')),
    Text.blue('Absorption IV (2:00)'),
    Text.blue('Regeneration II (0:20)'),
    Text.blue('Resistance (5:00)'),
    Text.blue('Fire Resistance (5:00)'),
  ])
  event.add('minecraft:melon_slice', Text.gray('Heals 0.5 ').append(Text.red('❤')))
  event.add('minecraft:sweet_berries', Text.gray('Heals 0.5 ').append(Text.red('❤')))
  event.add('minecraft:glow_berries', Text.gray('Heals 0.5 ').append(Text.red('❤')))
  event.add('minecraft:porkchop', Text.gray('Heals 1.5 ').append(Text.red('❤')))
  event.add('minecraft:cooked_porkchop', Text.gray('Heals 4 ').append(Text.red('❤')))
  event.add('minecraft:cod', Text.gray('Heals 1 ').append(Text.red('❤')))
  event.add('minecraft:cooked_cod', Text.gray('Heals 2.5 ').append(Text.red('❤')))
  event.add('minecraft:bread', Text.gray('Heals 2.5 ').append(Text.red('❤')))
  event.add('minecraft:cookie', Text.gray('Heals 1 ').append(Text.red('❤')))
  event.add('minecraft:pumpkin_pie', Text.gray('Heals 6 ').append(Text.red('❤')))
  event.add('minecraft:mushroom_stew', Text.gray('Heals 5 ').append(Text.red('❤')))

  event.add('minecraft:milk_bucket', Text.gray('Clears all effects'))
  event.add('minecraft:cake', Text.gray('Overeat for extra health!'))

  // event.add('minecraft:golden_apple', Text.gray('Heals ').append(Text.red('❤❤❤❤❤❤❤❤❤❤')))
  // event.add('minecraft:enchanted_golden_apple', Text.gray('Heals ').append(Text.red('❤❤❤❤❤❤❤❤❤❤')))
  // event.add('minecraft:melon_slice', Text.gray('Heals ').append(Text.red('♡')))
  // event.add('minecraft:sweet_berries', Text.gray('Heals ').append(Text.red('♡')))
  // event.add('minecraft:glow_berries', Text.gray('Heals ').append(Text.red('♡')))
  // event.add('minecraft:porkchop', Text.gray('Heals ').append(Text.red('❤♡')))
  // event.add('minecraft:cooked_porkchop', Text.gray('Heals ').append(Text.red('❤❤❤❤')))
  // event.add('minecraft:cod', Text.gray('Heals ').append(Text.red('❤')))
  // event.add('minecraft:cooked_cod', Text.gray('Heals ').append(Text.red('❤❤♡')))
  // event.add('minecraft:bread', Text.gray('Heals ').append(Text.red('❤❤♡')))
  // event.add('minecraft:cookie', Text.gray('Heals ').append(Text.red('❤')))
  // event.add('minecraft:pumpkin_pie', Text.gray('Heals ').append(Text.red('❤❤❤❤❤❤')))
  // event.add('minecraft:mushroom_stew', Text.gray('Heals ').append(Text.red('❤❤❤❤❤')))
  // event.add('minecraft:milk_bucket', Text.gray('Clears all effects'))
  
  
});