ServerEvents.recipes(event => {

  event.remove({ input: 'create:minecart_contraption' });
  event.remove({ input: 'create:furnace_minecart_contraption' });
  event.remove({ id: 'create:crafting/curiosities/cake' });
  event.remove({ id: 'create:crafting/appliances/slime_ball' });
  event.remove({ id: 'create:smelting/bread' });
  event.remove({ id: 'create:smelting/glass_from_tiled_glass' });
  event.remove({ id: 'create:smelting/glass_from_vertical_framed_glass' });
  event.remove({ id: 'create:smelting/glass_from_horizontal_framed_glass' });
  event.remove({ id: 'create:smelting/glass_from_framed_glass' });
  event.remove({ id: 'create:smelting/iron_ingot_from_crushed' });
  event.remove({ id: 'create:smelting/gold_ingot_from_crushed' });

  event.remove({ id: 'create:crafting/curiosities/minecart_coupling' });
  event.remove({ id: 'create:crafting/appliances/schedule_clear' });
  
  event.remove({ id: 'create:crafting/kinetics/controls' });
  event.remove({ id: 'create:crafting/kinetics/display_board' });
  event.remove({ id: 'create:crafting/kinetics/nixie_tube' });
  event.remove({ id: 'create:crafting/kinetics/framed_glass_door' });
  event.remove({ id: 'create:crafting/kinetics/framed_glass_trapdoor' });
  event.remove({ id: 'create:crafting/kinetics/schedule' });
  event.remove({ id: 'create:crafting/kinetics/super_glue' });
  event.remove({ id: 'create:crafting/kinetics/steam_whistle' });
  event.remove({ id: 'create:crafting/kinetics/train_door' });
  event.remove({ id: 'create:crafting/kinetics/track_station' });
  event.remove({ id: 'create:crafting/kinetics/track_signal' });
  event.remove({ id: 'create:crafting/kinetics/track_observer' });
  event.remove({ id: 'create:crafting/kinetics/track_observer_from_other_plates' });
  event.remove({ id: 'create:crafting/kinetics/wrench' });
  event.remove({ id: 'create:crafting/logistics/display_link' });

  event.remove({ id: 'create:copycat_step_from_zinc_ingots_stonecutting' });
  event.remove({ id: 'create:copycat_panel_from_zinc_ingots_stonecutting' });

  event.remove({ id: 'create:sequenced_assembly/track' });
  event.remove({ id: 'create:sequenced_assembly/precision_mechanism' });

  event.remove({ id: 'create:item_application/railway_casing_using_deployer' });
  event.remove({ id: 'create:item_application/railway_casing' });


})