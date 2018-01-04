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
  ])
