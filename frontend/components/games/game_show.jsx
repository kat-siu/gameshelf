import React from 'react';
import { Link } from 'react-router-dom';
// import Loader from 'react-loaders';
import ReviewIndexContainer from '../reviews/review_index_container';
import GameshelvesIndexContainer from '../gameshelves/gameshelves_index_container';

class GameShow extends React.Component {
  constructor(props) {
    super(props);

    this.addToShelf = this.addToShelf.bind(this);
    this.removeFromShelf = this.removeFromShelf.bind(this);
  }

  componentDidMount() {
    this.props.fetchGames()
    .then(() => this.props.fetchGame(this.props.match.params.gameId));
  }

  // make drop down for current user's shelves -- each item in drop down menu should have a click handler on createGameshelfMembership
  // gameid and shelfid needed to create shelf membership

  addToShelf(e) {
    e.preventDefault();
    this.props.createGameshelfMembership({ game_id: this.props.game.id, gameshelf_id: e.currentTarget.value }).then(() => swal("Success!", `This game was added to your shelf.`, "success"));
  }

  removeFromShelf(e) {
    e.preventDefault();
    this.props.deleteGameshelfMembership({ game_id: this.props.game.id, gameshelf_id: this.props.gameshelf.id });
  }

  handleDeleteGM(gameshelfId) {
    return () => {
      this.props.deleteGameshelfMembership({ game_id: this.props.game.id, gameshelf_id: gameshelfId }).then(() => swal("Success!", `This game was removed from your shelf.`, "success"));
    };
  }

  calcAvgRating() {
    if (this.props.reviews.length > 0) {
      let totalScore = 0;
       for (let i = 0; i < this.props.reviews.length; i++) {
         totalScore += this.props.reviews[i].rating;
       }
       return (Math.ceil((totalScore / this.props.reviews.length) * 2) / 2) + "/5";
     } else {
       return "No ratings available.";
     }
   }

  render() {
    if (!this.props.game) {
      return null;
    } else {
      const default_shelves = ["Played", "Currently Playing", "Want to Play"];

      const shelf_buttons = this.props.gameshelves.map((gameshelf) => {
        return (
          <div className="shelf-buttons-container">
            <section className="shelf-buttons">
              <option key={gameshelf.id} value={gameshelf.id}>{gameshelf.title}</option>
              <button onClick={this.addToShelf} value={gameshelf.id} className="shelf-add-remove-btn">
                <img src="https://s3.us-east-2.amazonaws.com/gameshelf/add1.png" width="17px" alt="Add to Gameshelf" />
              </button>
              <button onClick={this.handleDeleteGM(gameshelf.id)} className="shelf-add-remove-btn">
                <img src="https://s3.us-east-2.amazonaws.com/gameshelf/delete1.png" width="17px" alt="Remove from Gameshelf" />
              </button>
            </section>
          </div>
        )
      })

    //   let userGameshelves = [];
    //   const mapGameshelves = this.props.gameshelves.map(gameshelf => {
    //     userGameshelves.push(gameshelf);
    //   });
    //
    //   let userGames2 = [];
    //   const userGames = userGameshelves.forEach(gameshelf => {
    //     userGames2.push(Object.values(gameshelf.games));
    //   });
    //
    //   const userGames3 = [].concat.apply([], userGames2);
    //   // console.log(userGames3); returns an array of objects of the games
    //
    //   let userGames5 = [];
    //   const shelf_buttons = userGameshelves.map((gameshelf) => {
    //     gameshelf.games.map(game => {
    //       for (let i = 0; i < userGames3.length; i++) {
    //         if (!gameshelf.includes(userGames3[i])) {
    //           userGames5.push(userGames3[i]);
    //         }
    //     }
    //   });
    // }
    //
    //   console.log(userGames5);

      // const shelf_buttons = userGameshelves.map((gameshelf) => {
      //   debugger
      //   for (let i = 0; i < gameshelf.games.length; i++) {
      //     debugger
      //     if (gameshelf.games[i].id == this.props.game.id) {
      //       debugger
      //       return (
      //         <div className="shelf-buttons-container">
      //           <section className="shelf-buttons">
      //             <option key={gameshelf.id} value={gameshelf.id}>{gameshelf.title}</option>
      //             <button onClick={this.handleDeleteGM(gameshelf.id)} className="shelf-add-remove-btn">
      //               <img src="https://s3.us-east-2.amazonaws.com/gameshelf/delete1.png" width="17px" alt="Remove from Gameshelf" />
      //             </button>
      //           </section>
      //         </div>
      //       )
      //     } else if (gameshelf.games[i].id != this.props.game.id) {
      //       return (
      //         <div className="shelf-buttons-container">
      //           <section className="shelf-buttons">
      //             <option key={gameshelf.id} value={gameshelf.id}>{gameshelf.title}</option>
      //             <button onClick={this.addToShelf} value={gameshelf.id} className="shelf-add-remove-btn">
      //               <img src="https://s3.us-east-2.amazonaws.com/gameshelf/add1.png" width="17px" alt="Add to Gameshelf" />
      //             </button>
      //
      //           </section>
      //         </div>
      //       )
      //     } else if (gameshelf.games == null) {
      //       return (
      //         <div className="shelf-buttons-container">
      //           <section className="shelf-buttons">
      //             <option key={gameshelf.id} value={gameshelf.id}>{gameshelf.title}</option>
      //             <button onClick={this.addToShelf} value={gameshelf.id} className="shelf-add-remove-btn">
      //               <img src="https://s3.us-east-2.amazonaws.com/gameshelf/add1.png" width="17px" alt="Add to Gameshelf" />
      //             </button>
      //             <button onClick={this.handleDeleteGM(gameshelf.id)} className="shelf-add-remove-btn">
      //               <img src="https://s3.us-east-2.amazonaws.com/gameshelf/delete1.png" width="17px" alt="Remove from Gameshelf" />
      //             </button>
      //           </section>
      //         </div>
      //       )
      //     }
      //   }
      // })

      const shelf_options = this.props.gameshelves.map((gameshelf) => {
        if (default_shelves.includes(gameshelf.title)) {
          let selected = false;
          for (let i = 0; i < gameshelf.games.length; i++) {
            if (gameshelf.games[i].id == this.props.game.id) {
              selected = true;
            }
          }
          if (selected == true) {
            return (<option key={gameshelf.id} value={gameshelf.id} selected>{gameshelf.title}</option>)
          } else {
            return (<option key={gameshelf.id} value={gameshelf.id}>{gameshelf.title}</option>)
          }
        }
      })

    return (
      <div>
        <div className="gameshelf-box-container">
          <GameshelvesIndexContainer />
        </div>
        <div className="game-show-box">
          <div className="game-details">
            <div className="left-side-show">
              <div className="game-index-link">
                <Link to="/games">
                  &lt;&lt; Back to all games
                </Link>
              </div>
              <img className="game-cover-img" src={`${this.props.game.cover_img_url}`} />
              {shelf_buttons}
            </div>
            <div className="right-side-show">
              <div className="game-title">
                {this.props.game.title} ({this.props.game.year})
              </div>
              <br />
              <div className="status-dropdown">
                <p className="uppercase"><font color="#00afcc">Play Status: </font></p>
                <select onChange={this.addToShelf} name="status">
                  <option>Select Status</option>
                  {shelf_options}
                </select>
              </div>
              <br /> <br />
                <div>
                  <p className="uppercase"><font color="#00afcc">Average Rating:</font></p>
                  {this.calcAvgRating()}
                </div>
                <br /> <br />
              <div>
                <p className="uppercase"><font color="#00afcc">Platform:</font></p>
                {this.props.game.platform}
              </div>
              <br /> <br />
              <div>
                <p className="uppercase"><font color="#00afcc">Description:</font></p>
                {this.props.game.description}
              </div>
            </div>
          </div>
          <ReviewIndexContainer className="review-form" gameId={this.props.game.id} />
        </div>
      </div>
    )
    }
  }
}

export default GameShow;
