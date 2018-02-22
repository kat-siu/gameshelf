# <a href="https://gameshelf.herokuapp.com"><img src="https://s3.us-east-2.amazonaws.com/gameshelf/logo.png" width="250px"></a>

<a href="https://gameshelf.herokuapp.com">gameshelf: meet your next favorite video game!</a>

<img src="https://s3.us-east-2.amazonaws.com/gameshelf/Screen+Shot+2018-01-15+at+10.45.31+AM.png" width="900" />

gameshelf is a fullstack web application inspired by Goodreads with a theme of video games.  I decided to create this app as I was given game recommendations, but didn't have a convenient way of keeping track of these games. I saw a lack of existing web applications where an individual could keep track of games he/she wants to play, played, or is currently playing, and where a community of users could review games. gameshelf is an attempt to solve this issue and uses Ruby on Rails on the backend, a PostgreSQL database, and React/Redux on the frontend.

## Key Features
* User Authentication
* Games
  * Users can view an index of games or individual games
  * Individual game pages include specific information regarding the game, including description, average rating, platform, and user reviews
* Gameshelves
  * Gameshelves are created by the user in which they can store a collection of games
  * Gameeshelves are accessible to the user on every page as a sidebar, where the user can also create a new gameshelf or delete an existing gameshelf
* Play Status
  * Upon a new user signing up, he/she will be provided with three default gameshelves with a status of "Played," "Currently Playing," and "Want to Play"
* Reviews
  * Users can rate a game from one to five
  * Users can leave a single detailed text review of a game as well as update and delete their review all on the same page

## Technologies Used
<b>Backend</b>
* Routing, Controllers, and Model: Rails 
* Auth: hand-rolled using BCrypt
* Database: PostgreSQL

<b>Frontend</b>
* React using a redux implementation pattern
* jQuery used for AJAX requests
* Backend interaction done with jBuilder
* Styling done with SCSS

## Future Feature Implementations
- [ ] Dynamic search bar - search for a specific title
- [ ] User profiles - Allow users to upload a profile picture
- [ ] Game recommendations / discover component
- [ ] Make website responsive
- [ ] Add preview video URL to game schema - when user clicks on the preview button on the game show page, it will open up a modal of a YouTube video of the gameplay (if available)
