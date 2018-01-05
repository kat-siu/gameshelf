# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Game.destroy_all

guest = User.create!(username:"guest@gmail.com", password:"password")

Game.create!(
    title: 'Super Mario Odyssey',
    year: 2017,
    description: 'Super Mario Odyssey is a platform game in which players control the titular protagonist, Mario, as he travels across many worlds on the Odyssey, his hat-shaped ship, in an effort to rescue Princess Peach from Bowser, who plans to marry her. The game sees Mario traveling to various worlds known as "Kingdoms", which return to the free-roaming exploration-based level design featured in Super Mario 64 and Super Mario Sunshine, with each featuring unique designs ranging from photo-realistic cities to more fantasy-based worlds. Each kingdom has Mario searching for and clearing various objectives in order to obtain items known as Power Moons, which can power up the Odyssey and grant access to new worlds. Checkpoint flags littered throughout each world allow Mario to instantly warp to them once activated. Certain levels feature areas called "flat" zones, where Mario is placed in a side-scrolling environment similar to his appearance in the original Super Mario Bros.',
    platform: 'Nintendo Switch',
    cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/Super_Mario_Odyssey_(artwork).jpg',
  )

Game.create!(
    title: 'Hello Neighbor',
    year: 2017,
    description: "Hello Neighbor is a stealth horror game about sneaking into your neighbor's house to figure out what horrible secrets he's hiding in the basement. You play against an advanced AI that learns from your every move. Really enjoying climbing through that backyard window? Expect a bear trap there. Sneaking through the front door? There'll be cameras there soon. Trying to escape? The Neighbor will find a shortcut and catch you.",
    platform: 'Xbox One, PC (Microsoft Windows)',
    cover_img_url: 'https://static-cdn.jtvnw.net/ttv-boxart/Hello%20Neighbor.jpg'
  )

Game.create!(
    title: 'The Last of Us: Part II',
    year: 2018,
    description: 'Set 5 years after the events of the last of us, Joel and Ellie return on their journey through the ruined cities of America, their path ahead of them will be unfold.',
    platform: 'PlayStation 4',
    cover_img_url: 'https://static-ie.gamestop.ie/images/products/257449/3max.jpg'
  )

Game.create!(
    title: 'Pokémon Ultra Sun',
    year: 2017,
    description: '"Take on the role of a Pokémon Trainer and uncover new tales, and unravel the mystery behind the two forms reminiscent of the Legendary Pokémon. With new story additions and features this earns Pokémon™ Ultra Sun and Pokémon Ultra Moon the name "Ultra!" Another adventure is about to begin! New Pokémon forms have been discovered in the Aloha region in Pokémon Ultra Sun and Pokémon Ultra Moon! These forms are reminiscent of the Legendary Pokémon Solgaleo, Lunala, and Necrozma, first revealed in Pokémon Sun and Pokémon Moon. Head out on an epic journey as you solve the mystery behind these fascinating Pokémon! In this expanded adventure, get ready to explore more of the Alola region, catch more amazing Pokémon, and battle more formidable foes in Pokémon Ultra Sun and Pokémon Ultra Moon!"',
    platform: 'Nintendo 3DS',
    cover_img_url: 'https://images-na.ssl-images-amazon.com/images/I/8184Jv-yA-L._SL1500_.jpg'
  )

Game.create!(
    title: 'The Legend of Zelda: Breath of the Wild',
    year: 2017,
    description: 'Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across fields, through forests and to mountain peaks as you discover what has become of the ruined kingdom of Hyrule in this stunning open-air adventure.',
    platform: 'Wii U, Nintendo Switch',
    cover_img_url: 'https://images-na.ssl-images-amazon.com/images/I/81RbwMABstL._SL1455_.jpg'
  )

Game.create!(
    title: 'Life is Strange: Before the Storm',
    year: 2017,
    description: 'Life is Strange: Before the Storm is a new three part standalone story adventure set three years before the events of the first game. This time play as Chloe Price, a rebel who forms an unlikely friendship with Rachel Amber in dramatic new story in the BAFTA award winning franchise.',
    platform: 'PlayStation 4, Xbox One, PC (Microsoft Windows)',
    cover_img_url: 'https://gpstatic.com/acache/34/03/1/uk/packshot-0640d36c1087a85f2079366e6049f9d3.jpg'
  )

Game.create!(
    title: 'The Legend of Zelda: A Link Between Worlds',
    year: 2013,
    description: 'The Legend of Zelda: A Link Between Worlds is the first Zelda game made exclusively for the Nintendo 3DS is set in the fan-favorite world of The Legend of Zelda: A Link to the Past. A daring adventure awaits Link in Hyrule, where he can use his new ability to become a “drawing” and move along walls of dungeons. This opens up ways to explore and puzzle elements that give Link access to locations he could not otherwise reach.',
    platform: 'Nintendo 3DS',
    cover_img_url: 'http://i.imgur.com/UCkJFu4.jpg'
  )
