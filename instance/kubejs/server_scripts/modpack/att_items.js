// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  // Dragon Soul
  // Recipe Modified 2025.06.09-16:07 CST
  allthemods.shaped('allthetweaks:dragon_soul', ['APE', 'CDP', 'BCA'], {
    A: 'cataclysm:abyssal_sacrifice',
    B: 'apothic_enchanting:infused_breath',
    C: 'eternal_starlight:chain_of_souls',
    D: ['hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon",hostilenetworks:data=1255]', 'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon",hostilenetworks:data=1254]'],
    E: 'minecraft:dragon_egg',
    P: 'allthemodium:piglich_heart_block'
  }).id('allthemods:allthetweaks/dragon_soul')

 // Improbable Probability Device
 // Recipe Modified 2025.06.09-16:36 CST
 allthemods.shaped('allthetweaks:improbable_probability_device', ['CEC', 'ASA', 'MDM'], {
  A: 'mekanism:pellet_antimatter',
  C: 'modern_industrialization:quantum_circuit',
  D: 'mekanism:portable_qio_dashboard',
  E: 'ae2:quantum_entangled_singularity',
  M: 'pneumaticcraft:module_expansion_card',
  S: 'hostilenetworks:sim_chamber'
  }).id('allthemods:allthetweaks/improbable_probability_device')

  // Dimensional Seed Recipe
  // Recipie Modified for uniform compression rates
  allthemods.shaped('allthetweaks:dimensional_seed', ['ABC', 'DEF', 'GHI'], {
    A: 'allthecompressed:netherrack_5x',
    B: 'allthecompressed:dirt_5x',
    C: 'allthecompressed:obsidian_5x',
    D: 'allthetweaks:mini_exit',
    E: 'allthetweaks:mini_nether',
    F: 'allthetweaks:mini_end',
    G: 'allthecompressed:end_stone_5x',
    H: 'allthecompressed:emerald_block_5x',
    I: 'allthecompressed:diamond_block_5x'
  }).id('allthemods:allthetweaks/dimensional_seed')

  // Withers Compass
  // Recipe Modified 2025.06.09-21:05 CST
  allthemods.shaped('allthetweaks:withers_compass', ['GWG', 'BEB', 'CWC'], {
    B: 'industrialforegoing:wither_builder',
    C: 'mysticalagradditions:nether_star_crux',
    D: 'deeperdarker:heart_of_the_deep',
    E: 'explorerscompass:explorerscompass',
    G: 'generatorgalore:netherstar_generator_64x',
    W: 'mysticalagriculture:witherproof_bricks'    
  }).id('allthemods:allthetweaks/withers_compass')

  // Philosopher's Fuel
  allthemods.shaped('allthetweaks:philosophers_fuel', ['ABC', 'DEF', 'GHI'], {
  A: 'generatorgalore:ender_generator',
	B: 'ironfurnaces:rainbow_coal'  ,
	C: 'bigreactors:insanite_block' ,
	D: Ingredient.of(['modern_industrialization:uranium_fuel_rod_quad','create:blaze_burner']),
	E: 'mysticalagradditions:insanium_coal_block',
  F: 'forbidden_arcanus:smelter_prism',
	G: 'mysticalagriculture:awakened_supremium_ingot_block',
	H: 'generatorgalore:magmatic_generator_64x',
  I: 'evilcraft:dark_tank[cyclopscore:fluid_content={amount:16000,id:"justdirethings:refined_t4_fluid_source"}]'
  }).id('allthemods:allthetweaks/philosophers_fuel')

 // Nexium Emitter
 allthemods.shaped('allthetweaks:nexium_emitter', ['A B', ' CF', 'GED'], {
  A: 'powah:player_transmitter_nitro',
  B: 'ae2wtlib:wireless_universal_terminal[ae2wtlib:has_ex_pattern_access_terminal={},ae2wtlib:has_pattern_encoding_terminal={},ae2wtlib:has_crafting_terminal={},ae2wtlib:has_pattern_access_terminal={},ae2:stored_energy=6400000.0d]',
  F: [Item.of('mekanism:module_gravitational_modulating_unit')],
  D: Ingredient.of(['modern_industrialization:large_advanced_motor',"create:mechanical_arm"]),
  E: 'immersiveengineering:tesla_coil',
  C: 'advanced_ae:quantum_multi_threader',
  G: 'aeinfinitybooster:infinity_card'
}).id('allthemods:allthetweaks/nexium_emitter')

// Oblivion Shard
allthemods.shaped('allthetweaks:oblivion_shard', [' AB', 'ECF', 'BG '], {
  A: 'forbidden_arcanus:eternal_stella',
  C: 'evilcraft:mace_of_destruction[cyclopscore:fluid_content={amount:4000,id:"evilcraft:blood"}]',
  B: 'evilcraft:piercing_vengeance_focus',
  E: 'cataclysm:meat_shredder',
  G: 'twilightforest:snow_queen_trophy',
  F: 'cataclysm:void_forge'
}).id('allthemods:allthetweaks/oblivion_shard')


// Pulsating Black Hole
allthemods.shaped('allthetweaks:pulsating_black_hole', ['ABC', 'DEF', ' HI'], {
  A: 'irons_spellbooks:fire_upgrade_orb',
  B: 'ae2:quantum_ring'  ,
  C: 'pneumaticcraft:micromissiles' ,
  D: 'justdirethings:paradoxmachine',
  E: 'pocketstorage:psu_4',
  F: 'occultism:stable_wormhole',
  H: 'industrialforegoing:mycelial_explosive',
  I: 'evilcraft:lightning_bomb'
}).id('allthemods:pressure/allthetweaks/pulsating_black_hole')

  // Creative Essence
  allthemods.shaped('mysticalagradditions:creative_essence', ['CAC', 'ABA', 'CAC'], {
    A: 'mysticalagradditions:insanium_block',
    C: 'mysticalagradditions:insanium_gemstone_block',
    B: 'mysticalagriculture:master_infusion_crystal'
  }).id('allthemods:allthetweaks/creative_essence')

})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
