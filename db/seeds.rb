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

Game.create!([
  {
    title: 'Super Mario Odyssey',
    year: 2017,
    description: 'Super Mario Odyssey is a platform game in which players control the titular protagonist, Mario, as he travels across many worlds on the Odyssey, his hat-shaped ship, in an effort to rescue Princess Peach from Bowser, who plans to marry her. The game sees Mario traveling to various worlds known as "Kingdoms", which return to the free-roaming exploration-based level design featured in Super Mario 64 and Super Mario Sunshine, with each featuring unique designs ranging from photo-realistic cities to more fantasy-based worlds. Each kingdom has Mario searching for and clearing various objectives in order to obtain items known as Power Moons, which can power up the Odyssey and grant access to new worlds. Checkpoint flags littered throughout each world allow Mario to instantly warp to them once activated. Certain levels feature areas called "flat" zones, where Mario is placed in a side-scrolling environment similar to his appearance in the original Super Mario Bros.',
    platform: 'Nintendo Switch',
    cover_img_url: 'https://s3.us-east-2.amazonaws.com/gameshelf/Super_Mario_Odyssey_(artwork).jpg',
  }

  {
    title: 'Hello Neighbor',
    year: 2017,
    description: "Hello Neighbor is a stealth horror game about sneaking into your neighbor's house to figure out what horrible secrets he's hiding in the basement. You play against an advanced AI that learns from your every move. Really enjoying climbing through that backyard window? Expect a bear trap there. Sneaking through the front door? There'll be cameras there soon. Trying to escape? The Neighbor will find a shortcut and catch you.",
    platform: 'Xbox One, PC (Microsoft Windows)',
    cover: '//images.igdb.com/igdb/image/upload/t_thumb/zsvyzrqpbuvtfnpdagfp.jpg'
  }

  {
    title: 'The Last of Us: Part II',
    year: 2018,
    description: 'Set 5 years after the events of the last of us, Joel and Ellie return on their journey through the ruined cities of America, their path ahead of them will be unfold.',
    platform: 'PlayStation 4',
    cover: '//images.igdb.com/igdb/image/upload/t_thumb/murzziwvvmzacglj5ch5.jpg'
  }
  ])
