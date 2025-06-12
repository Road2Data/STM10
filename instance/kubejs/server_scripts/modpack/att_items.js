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
  // Recipe Modified 2025.06.11-12:23 CST
  allthemods.shaped('allthetweaks:withers_compass', ['CWC', 'DGD', 'CBC'], {
    B: 'industrialforegoing:wither_builder',
    C: 'mysticalagriculture:witherproof_bricks',
    D: 'deeperdarker:heart_of_the_deep',
    G: 'generatorgalore:netherstar_generator_64x',
    W: 'ars_nouveau:glyph_wither'
  }).id('allthemods:allthetweaks/withers_compass')

  // Philosopher's Fuel
  // Recipe Modified 2025.06.09-21:20 CST
  allthemods.shaped('allthetweaks:philosophers_fuel', ['PIP', 'BMB', 'CAC'], {
    A: 'mysticalagriculture:awakened_supremium_ingot_block',
    B: 'create:blaze_burner',
    C: 'mysticalagradditions:insanium_coal_block',
    I: 'bigreactors:insanite_block',
    M: 'generatorgalore:magmatic_generator_64x',
    P: 'forbidden_arcanus:smelter_prism'
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
// Recipe Modified 2025.06.12-14:50 CST
allthemods.shaped('allthetweaks:oblivion_shard', [' BE', 'SLH', 'EM '], {
  B: 'mahoutsukai:morgan',
  E: 'forbidden_arcanus:eternal_stella',
  H: 'cataclysm:infernal_forge',
  L: 'evilcraft:lightning_bomb',
  M: 'allthemodium:unobtainium_mace',
  S: 'cataclysm:meat_shredder'
}).id('allthemods:allthetweaks/oblivion_shard')


// Pulsating Black Hole
// Recipe Modified 2025.06.11-19:04 CST
allthemods.shaped('allthetweaks:pulsating_black_hole', ['TUT', 'EQE', 'TUT'], {
  E: 'enderio:sentient_ender',
  Q: 'ae2:quantum_entangled_singularity',
  T: 'eternal_starlight:tenacious_petal',
  U: 'pocketstorage:psu_4'
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
