# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Game.destroy_all
Review.destroy_all
Gameshelf.destroy_all
GameshelfMembership.destroy_all

guest = User.create!(name: 'Guest', username:"guest@gmail.com", password:"password")
kat = User.create!(name: 'Kat', username:"k.siu92@gmail.com", password:"password")


batman_arkham_city = Game.create!(
  title: 'Batman Arkham City',
  year: 2011,
  description: "Batman: Arkham City builds upon the intense, atmospheric foundation of Batman: Arkham Asylum, sending players flying through the expansive Arkham City - five times larger than the game world in Batman: Arkham Asylum - the new maximum security 'home' for all of Gotham City's thugs, gangsters and insane criminal masterminds. Featuring an incredible Rogues Gallery of Gotham City's most dangerous criminals including Catwoman, The Joker, The Riddler, Two-Face, Harley Quinn, The Penguin, Mr. Freeze and many others, the game allows players to genuinely experience what it feels like to be The Dark Knight delivering justice on the streets of Gotham City. ",
  platform: 'PlayStation 3, Xbox 360',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/308071-batman-arkham-city-playstation-3-front-cover.jpg'
)

castlevania = Game.create!(
  title: 'Castlevania: Symphony of the Night', year: 1997,
  description: 'As a descendant of Dracula, you must end the vampire bloodline. Can you rid the world of this unspeakable terror? Uncover the mystery of Castlevania and challenge an adventure as legendary as its name. Over 140 different enemies, bosses, and ghastly creatures. Awesome magical spells - transform into a bat, a wolf, or etheral mist. Hidden weapons, secrets, and characters...the largest Castlevania ever!',
  platform: 'PlayStation, Sega Saturn, Xbox Live Arcade',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/castlevania.jpg'
)

doom = Game.create!(
  title: 'DOOM',
  year: 2016,
  description: 'Developed by id software, the studio that pioneered the first-person shooter genre and created multiplayer Deathmatch, DOOM returns as a brutally fun and challenging modern-day shooter experience. Relentless demons, impossibly destructive guns, and fast, fluid movement provide the foundation for intense, first-person combat – whether you’re obliterating demon hordes through the depths of Hell in the single-player campaign, or competing against your friends in numerous multiplayer modes. Expand your gameplay experience using DOOM SnapMap game editor to easily create, play, and share your content with the world.',
  platform: 'PC (Microsoft Windows), Xbox One, PlayStation 4',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/doom.jpg'
)

fez = Game.create!(
  title: 'Fez',
  year: 2012,
  description: 'Gomez is a 2D creature living in a 2D world. Or is he? When the existence of a mysterious 3rd dimension is revealed to him, Gomez is sent out on a journey that will take him to the very end of time and space. Use your ability to navigate 3D structures from 4 distinct classic 2D perspectives.',
  platform: 'PlayStation 4, PlayStation 3, Xbox 360, PlayStation Vita, Microsoft Windows, Linux, Android, iOS',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/fez.png'
)

flinthook = Game.create!(
  title: 'Flinthook',
  year: 2017,
  description: 'Live the life of space captain Flinthook! Armed with your mighty hookshot, your uncanny slow-motion powers and your trusty blasma pistol, plunder and fight your way through an infinite variety of randomly-assembled spaceships for treasure, loot and fame!',
  platform: 'Xbox One, PlayStation 4, Microsoft Windows',
  cover_img_url: 'https://images-na.ssl-images-amazon.com/images/I/61L%2BjyOq9hL.jpg'
)

garfield = Game.create!(
  title: 'Garfield: Caught in the Act',
  year: 1995,
  description: 'Odie scares Garfield while he is watching television, and he ends up falling on the television. In a rushed effort to repair the television before Jon catches them, Garfield and Odie attempt to put the banged up and broken pieces together. They did actually put something together, but it was far from being a real television. As Garfield throws away the spare pieces, they become an electronic monster, the Glitch. The Glitch transports Garfield into the television. Now he must defeat the Glitch and make his way out.',
  platform: 'Sega Mega Drive, Sega Game Gear, Windows PC',
  cover_img_url: "https://s3.us-east-2.amazonaws.com/gameshelf/garfield.png"
)

hello_neighbor = Game.create!(
  title: 'Hello Neighbor',
  year: 2017,
  description: "Hello Neighbor is a stealth horror game about sneaking into your neighbor's house to figure out what horrible secrets he's hiding in the basement. You play against an advanced AI that learns from your every move. Really enjoying climbing through that backyard window? Expect a bear trap there. Sneaking through the front door? There'll be cameras there soon. Trying to escape? The Neighbor will find a shortcut and catch you.",
  platform: 'Xbox One, PC (Microsoft Windows)',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/hello_neighbor.jpg'
)

kingdom_hearts = Game.create!(
  title: 'Kingdom Hearts',
  year: 2002,
  description: "The premise of Kingdom Hearts is designed around traveling to a collection of levels that are both original designs, and based on various Disney stories, referred to in-game as 'Worlds'. The Worlds are populated by NPC's, based on relevant characters from the corresponding Disney story, for example, the World based on Disney's Alice in Wonderland features appearances by Alice, the White Rabbit, and the Queen of Hearts. Interacting with these characters forms part of gameplay, while combating the games enemies, the 'Heartless' forms the other.

  Successful completion of a World is accomplished by defeating a key foe, which is either the primary villain from the Disney story, a unique Heartless of particular strength, or a combination thereof. Each world has a key foe which must be defeated, although there are many mini-bosses, side quests and treasures to be found that contribute to character progression within the game, and give bonuses for their completion in the form of weapons, items, and bonus scenes.

  The game uses an experience based progression system, with experience gained by defeating foes. Experience gained rises in relation to the strength of the foe, and is consistent for each enemy over the course of the game. Levels are gained with experience, and provide increases to stat attributes in strength, defence, magic, hit points, magic points and ability points, with a new, predetermined ability unlocked approximately every four levels. Enemies also drop a combination of four types of reward upon death, green orbs that replenish HP, blue, translucent bubbles that replenish MP, yellow diamonds that contribute funds to the in-game currency 'Munny', and tiny chests that when picked up, add a item to the players inventory based on the foe defeated. Such items include those used to restore HP and MP, items to aid party members or synthesis materials which can be used to create weapons and armor.",
  platform: 'PlayStation 2',
  cover_img_url: 'https://gamefaqs.akamaized.net/box/6/0/3/55603_front.jpg'
)

the_last_of_us_part_ii = Game.create!(
  title: 'The Last of Us: Part II',
  year: 2018,
  description: 'Set 5 years after the events of the last of us, Joel and Ellie return on their journey through the ruined cities of America, their path ahead of them will be unfold.',
  platform: 'PlayStation 4',
  cover_img_url: 'https://static-ie.gamestop.ie/images/products/257449/3max.jpg'
)

the_last_of_us = Game.create!(
  title: 'The Last of Us Remastered',
  year: 2014,
  description: 'Winner of over 200 game of the year awards, The Last of Us has been remastered for the PlayStation®4. Now featuring higher resolution character models, improved shadows and lighting, in addition to several other gameplay improvements. Abandoned cities reclaimed by nature. A population decimated by a modern plague. Survivors are killing each other for food, weapons whatever they can get their hands on. Joel, a brutal survivor, and Ellie, a brave young teenage girl who is wise beyond her years, must work together if they hope to survive their journey across the US. The Last of Us: Remastered includes the Abandoned Territories Map Pack, Reclaimed Territories Map Pack, and the critically acclaimed The Last of Us: Left Behind Single Player campaign.',
  platform: 'PlayStation 4',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/the_last_of_us.jpg'
)

life_is_strange = Game.create!(
  title: 'Life is Strange: Before the Storm',
  year: 2017,
  description: 'Life is Strange: Before the Storm is a new three part standalone story adventure set three years before the events of the first game. This time play as Chloe Price, a rebel who forms an unlikely friendship with Rachel Amber in dramatic new story in the BAFTA award winning franchise.',
  platform: 'PlayStation 4, Xbox One, PC (Microsoft Windows)',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/life_is_strange.jpg'
)

mega_man_x = Game.create!(
  title: 'Mega Man X',
  year: 1993,
  description: "Near the end of his life, Dr. Light succeeds in creating the first of a new series of robots which will change the world. Able to think and make decisions, this new robot holds great danger as well as great possibilities. Fearful of the possible consequences of unleashing his creation on the world, Dr. Light decides to seal him in a capsule and test his systems until they are totally reliable. The future will have to decide his fate...
Released from the capsule by Dr. Cain, 'X' is born into the world of the future where the robot rebellions are a thing of the past. But when Dr. Cain tries to implement Dr. Light's designs into a new series of Reploids, something goes hideously wrong. Now the future lies on the brink of destruction and a new Mega Man must emerge to face Sigma and his forces before the human race is wiped from the planet!",
  platform: 'Super Nintendo Entertainment System, Sega Saturn, PC, Nintendo Gamecube, PlayStation, Playstaion 2, PSP (Maverick Hunter X), Virtual Console, Nintendo Switch, Xbox One, PlayStation 4',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/megamanx.jpg'
)

oliver = Game.create!(
  title: "Oliver's Outer Space Dream",
  year: 2018,
  description: "Oliver dreams of floating weightlessly in outer space, eating all the sushi & drumsticks that fill his heart with content. It's up to *YOU* to get as many food items as you can to increase your score! Keep afloat by pressing/holding the *SPACE BAR*. Avoid the asteroids, or Oliver will be one angry cat if he's awoken...",
  platform: 'Web Browser',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/astro_oliver.png',
)

overwatch = Game.create!(
  title: 'Overwatch',
  year: 2016,
  description: "In a time of global crisis, an international task force of heroes banded together to restore peace to a war-torn world. This organization, known as Overwatch, ended the crisis and helped maintain peace for a generation, inspiring an era of exploration, innovation, and discovery. After many years, Overwatch's influence waned and it was eventually disbanded. Now in the wake of its dismantling, conflict is rising once again. Overwatch may be gone... but the world still needs heroes.",
  platform: 'PlayStation 4, Xbox One, Microsoft Windows',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/overwatch_2.jpg'
)

pokemon_ultra_sun = Game.create!(
  title: 'Pokémon Ultra Sun',
  year: 2017,
  description: '"Take on the role of a Pokémon Trainer and uncover new tales, and unravel the mystery behind the two forms reminiscent of the Legendary Pokémon. With new story additions and features this earns Pokémon™ Ultra Sun and Pokémon Ultra Moon the name "Ultra!" Another adventure is about to begin! New Pokémon forms have been discovered in the Aloha region in Pokémon Ultra Sun and Pokémon Ultra Moon! These forms are reminiscent of the Legendary Pokémon Solgaleo, Lunala, and Necrozma, first revealed in Pokémon Sun and Pokémon Moon. Head out on an epic journey as you solve the mystery behind these fascinating Pokémon! In this expanded adventure, get ready to explore more of the Alola region, catch more amazing Pokémon, and battle more formidable foes in Pokémon Ultra Sun and Pokémon Ultra Moon!"',
  platform: 'Nintendo 3DS',
  cover_img_url: 'https://images-na.ssl-images-amazon.com/images/I/8184Jv-yA-L._SL1500_.jpg'
)

resident_evil_four = Game.create!(
  title: 'Resident Evil 4',
  year: 2005,
  description: "Resident Evil 4, known in Japan as Biohazard 4, is a third-person shooter survival horror video game developed and published by Capcom. The sixth major installment in the Resident Evil series, the game was originally released for the GameCube in North America and Japan in January 2005, and in Europe and Australia in March 2005. The story of Resident Evil 4 follows the U.S. government special agent Leon S. Kennedy, who is sent on a mission to rescue Ashley Graham, the U.S. President's daughter whom a sinister cult has kidnapped. Traveling to a rural area of Spain, Leon fights hordes of violent villagers and reunites with the mysterious spy Ada Wong.",
  platform: 'GameCube, PlayStation 2, Microsoft Windows, Wii, Zeebo, iOS, PlayStation 3, Xbox 360, Android, PlayStation 4, Xbox One',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/resident_evil_4.jpg'
)

russian_subway_dogs = Game.create!(
  title: 'Russian Subway Dogs',
  year: 2018,
  description: 'Russian Subway Dogs is simple enough for a puppy to pick up but still packed with challenge. Run and jump along the subway platform. Bark behind people to scare up food and bounce vodka around the stage. Soon you’ll be discovering high level strategies like cooking and eating rival wildlife with vodka explosions!',
  platform: 'PC (Microsoft Windows, Mac), Playstation 4, PS Vita',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/russian_subway_dogs.png'
)

sonic_the_hedgehog = Game.create!(
  title: 'Sonic the Hedgehog',
  year: 1991,
  description: "On the lush, tropical paradise of South Island, Sonic the Hedgehog's animal friends begin disappearing one by one. When he discovers that the evil scientist, Dr. Ivo Robotnik, has been kidnapping them and converting them into robotic Badniks as part of a plot to collect all six of the fabled Chaos Emeralds, Sonic decides it's up to him to save them, and embarks on a quest to free his friends and thwart the evil schemes of Robotnik.

  As Sonic races through the Zones of the island, he engages in numerous confrontations with the nefarious Robotnik and his deadly machines, and one by one frees the animals from their robotic shells and capsules placed at the end of almost every zone. In their final confrontation, the Doctor prepares his last dastardly contraption to end his adversary but proves no match for Sonic's awesome might, and his machine is totaled. Fleeing with his tail between his legs, Robotnik abandons his laboratory as it explodes, crumbling to scrap, with Sonic narrowly escaping. Following his escape, Sonic finally returns to the vast Green Hills where his journey began.",
  platform: 'Sega Genesis, Master System, Game Gear, Game Boy Advance, Nintendo 3DS, iOS, Android, Apple TV',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/sonic.jpg'
)

steamworld_dig = Game.create!(
  title: 'SteamWorld Dig',
  year: 2013,
  description: "SteamWorld Dig is a platform mining adventure with strong Metroidvanian influences. Take the role of Rusty, a lone mining steambot, as he arrives at an old mining town in great need. Dig your way through the old earth, gaining riches while uncovering the ancient threat that lurks below...",
  platform: 'PlayStation 4, Nintendo 3DS, Wii U, Xbox One, PlayStation Vita, Microsoft Windows, Linux',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/steam_world_dig2.jpg'
)

super_mario_odyssey = Game.create!(
  title: 'Super Mario Odyssey',
  year: 2017,
  description: 'Super Mario Odyssey is a platform game in which players control the titular protagonist, Mario, as he travels across many worlds on the Odyssey, his hat-shaped ship, in an effort to rescue Princess Peach from Bowser, who plans to marry her. The game sees Mario traveling to various worlds known as "Kingdoms", which return to the free-roaming exploration-based level design featured in Super Mario 64 and Super Mario Sunshine, with each featuring unique designs ranging from photo-realistic cities to more fantasy-based worlds. Each kingdom has Mario searching for and clearing various objectives in order to obtain items known as Power Moons, which can power up the Odyssey and grant access to new worlds. Checkpoint flags littered throughout each world allow Mario to instantly warp to them once activated. Certain levels feature areas called "flat" zones, where Mario is placed in a side-scrolling environment similar to his appearance in the original Super Mario Bros.',
  platform: 'Nintendo Switch',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/Super_Mario_Odyssey_(artwork).jpg',
)

tetris = Game.create!(
  title: 'Tetris',
  year: 1984,
  description: "Tetris (Russian: Тетрис, pronounced [ˈtɛtrʲɪs]) is a tile-matching puzzle video game, originally designed and programmed by Russian game designer Alexey Pajitnov. It was released on June 6, 1984, while he was working for the Dorodnitsyn Computing Centre of the Academy of Science of the Soviet Union in Moscow. He derived its name from the Greek numerical prefix tetra- (all of the game's pieces contain four segments) and tennis, Pajitnov's favorite sport.
  Tetris was the first entertainment software to be exported from the Soviet Union to the US, where it was published by Spectrum HoloByte for Commodore 64 and IBM PC. The Tetris game is a popular use of tetrominoes, the four-element special case of polyominoes. Polyominoes have been used in popular puzzles since at least 1907, and the name was given by the mathematician Solomon W. Golomb in 1953. However, even the enumeration of pentominoes is dated to antiquity.",
  platform: 'Electronika 60, Acorn Electron, Amiga, Amstrad CPC, Amstrad PCW, Apple II, Apple IIgs, Atari ST, Arcade, BBC Micro, CD-i, Commodore VIC-20, Commodore 64, FM-7, Game Boy, Game Boy Color, Mac OS, MSX, NES, PC-8801, PC-9801, Mega Drive, MS-DOS, TRS-80 CoCo, WonderSwan Color, X68000, ZX Spectrum',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/tetris.jpg'
)

typing_of_the_dead = Game.create!(
  title: 'Typing of the Dead',
  year: 1999,
  description: "Typing of the dead: Overkill fuses the horror and comedy of the legendary House of the Dead series with unique typing mechanics in order to deliver a truly original gaming experience! This gruesome shooter puts you in the middle of a mutant outbreak in Bayou county.",
  platform: 'Arcade game, Microsoft Windows, Dreamcast, PlayStation 2, iOS',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/130401-the-typing-of-the-dead-dreamcast-front-cover.jpg'
)

ultimate_chicken_horse = Game.create!(
  title: 'Ultimate Chicken Horse',
  year: 2016,
  description: 'Ultimate Chicken Horse is a party platformer game where you build the level as you play, placing traps and hazards to screw your friends over, but trying not to screw yourself.',
  platform: 'Steam, Playstation 4, Xbox One, Nintendo Switch (2018)',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/ultimate_chicken_horse.jpg'
)

wow = Game.create!(
  title: 'World of Warcraft',
  year: 2004,
  description: "World of Warcraft® is an online role-playing experience set in the award-winning Warcraft universe. Players assume the roles of Warcraft heroes as they explore, adventure, and quest across a vast world. Being 'Massively Multiplayer,' World of Warcraft allows thousands of players to interact within the same world. Whether adventuring together or fighting against each other in epic battles, players will form friendships, forge alliances, and compete with enemies for power and glory.",
  platform: 'Microsoft Windows, macOS',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/wow.jpg'
)

zelda_breath_of_wild = Game.create!(
  title: 'The Legend of Zelda: Breath of the Wild',
  year: 2017,
  description: 'Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across fields, through forests and to mountain peaks as you discover what has become of the ruined kingdom of Hyrule in this stunning open-air adventure.',
  platform: 'Wii U, Nintendo Switch',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/zelda_breath_of_wild.jpg'
)

zelda_link_between_worlds = Game.create!(
  title: 'The Legend of Zelda: A Link Between Worlds',
  year: 2013,
  description: 'The Legend of Zelda: A Link Between Worlds is the first Zelda game made exclusively for the Nintendo 3DS is set in the fan-favorite world of The Legend of Zelda: A Link to the Past. A daring adventure awaits Link in Hyrule, where he can use his new ability to become a “drawing” and move along walls of dungeons. This opens up ways to explore and puzzle elements that give Link access to locations he could not otherwise reach.',
  platform: 'Nintendo 3DS',
  cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/zelda_link_btwn_worlds.jpg'
)

review1 = Review.create!(rating: 3, body: 'Fun game. Love the background music.', game_id: flinthook.id, user_id: guest.id)
review2 = Review.create!(rating: 5, body: 'Great and fun game, although it does seem a bit easy.', game_id: super_mario_odyssey.id, user_id: kat.id)
