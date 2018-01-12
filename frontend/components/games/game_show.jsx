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
    // .then(() => this.props.fetchReviews());
    // .then(() => this.props.fetchGameshelves(this.props.currentUser));
    // this.props.fetchGame(this.props.match.params.gameId);
    // this.props.fetchReviews();
    // this.props.fetchGameshelves(this.props.currentUser);
    // chain promises

  // make drop down for current user's shelves -- each item in drop down menu should have a click handler on createGameshelfMembership
  // gameid and shelfid needed to create shelf membership

  addToShelf(e) {
    e.preventDefault();
    this.props.createGameshelfMembership({game_id: this.props.game.id, gameshelf_id: e.currentTarget.value });

  }

  removeFromShelf(e) {
    debugger
    e.preventDefault();
    this.props.deleteGameshelfMembership({game_id: this.props.game.id, gameshelf_id: e.currentTarget.value });
  }

      // if (default_shelves.includes(gameshelf.title)) {
      //   if (gameshelf.games.includes(this.props.game)) {
      //     <option key={gameshelf.id} value={gameshelf.id} selected>{gameshelf.title}</option>
      //   } else {
      //     return (
      //       <option key={gameshelf.id} value={gameshelf.id}>{gameshelf.title}</option>
      //     )
      //   }
      // }

  render() {
    if (!this.props.game) {
      return null;
    } else {

      const default_shelves = ["Played", "Currently Playing", "Want to Play"];
      //
      // const status_dropdown = this.props.gameshelves.map((gameshelf) => {
      //   if ( default_shelves.includes(gameshelf.title) {
      //     return (
      //       <section>
      //         <option key={gameshelf.id} value={gameshelf.id}>{gameshelf.title}</option>
      //         <button onClick={this.addToShelf} value={gameshelf.id} className="styled-btn">Add to a gameshelf</button>
      //         <button onClick={this.removeFromShelf} value={gameshelf.id} className="styled-btn">Remove from shelf</button>
      //       </section>
      //     )
      //   })
      // })
//       const play_status =
//           if ( default_shelves.includes(this.props.gameshelves.title)) {
//             return (
//               <div>
//                 Play Status:
//                 <select onChange={this.addToShelf} name="status">
//                   <button class="btn btn-primary dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">Dropdown Example
//                   <option key={gameshelf.id} value="{gameshelf.id}">Currently Playing</option>
//                   <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
//
//                 </select>
//               </div>
//               </label>
//             )
//           }
//         })
  //
  // renderPlayStatus() {
  //   const playStatusShelves = this.props.gameshelves.filter((gameshelf) => default_shelves.includes(default_shelves));
  //   return (
  //     <select onChange={this.addToShelf}>
  //       {playStatusShelves.map((shelf, idx) => )}
  //     </select>
  //   )
  //
  //   shelves.filter( (shelf) => shelf.user_id === this.props.currentUser.id );
  //   return (
  //     <ul className="shelvings-display">
  //       {userShelves.map((shelf, i) =>
  //         <li className="shelving-display" key={i}>
  //           <span id="shelving-display" onClick={this.bookshelfLink(shelf)}>
  //             {shelf.name}
  //           </span>
  //           <i id="delete-shelving-book-show" className="fa fa-times fa-5" onClick={this.handleDeleteShelving(shelf)}></i>
  //         </li>)}
  //     </ul>
  //   );
  // }

    // const shelf_buttons = this.props.gameshelves.map((gameshelf) => {
    //   debugger
    //   return (
    //     <section>
    //       <option key={gameshelf.id} value={gameshelf.id}>{gameshelf.title}</option>
    //       <button onClick={this.addToShelf} value={gameshelf.id} className="styled-btn">Add to a gameshelf</button>
    //       <button onClick={this.removeFromShelf} value={gameshelf.id} className="styled-btn">Remove from shelf</button>
    //     </section>
    //     )
    //   })

    const shelf_options = this.props.gameshelves.map((gameshelf) => {
      debugger
      if (default_shelves.includes(gameshelf.title)) {
        var selected = false;
        for (var i = 0; i < gameshelf.games.length; i++) {
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




    // const shelf_options = this.props.gameshelves.map((gameshelf) => {
    //   if ( default_shelves.includes(gameshelf.title) ) {
    //     if ( gameshelf.games.includes(this.props.game) ) {
    //       <option key={gameshelf.id} value={gameshelf.id} selected>{gameshelf.title}</option>
    //     } else {
    //       return (
    //         <option key={gameshelf.id} value={gameshelf.id}>{gameshelf.title}</option>
    //       )
    //     }
    //   }
    // })

    // <div class="btn-group">
    //   <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //     Action
    //   </button>
    //   <div class="dropdown-menu">
    //     <a class="dropdown-item" href="#">Action</a>
    //     <a class="dropdown-item" href="#">Another action</a>
    //     <a class="dropdown-item" href="#">Something else here</a>
    //     <div class="dropdown-divider"></div>
    //     <a class="dropdown-item" href="#">Separated link</a>
    //   </div>
    // </div>



    return (
      <div className="game-show-box">
        <div className="game-details">
          <div className="left-side-show">
            <div className="game-index-link"><Link to="/games">&lt;&lt; Back to all games</Link></div>
            <img className="game-cover-img" src={`${this.props.game.cover_img_url}`} />
            <div className="gameshelf-box-container"><GameshelvesIndexContainer /></div>

          </div>
          <div className="right-side-show">
            <div className="game-title">{this.props.game.title} ({this.props.game.year})</div>
            <br />

              <div className="status-dropdown">
                <label>Play Status:
                  <select onChange={this.addToShelf} name="status">
                    <option disabled>Select Status</option>
                    {shelf_options}
                  </select>
                </label>
              </div>


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
    )
    }
  }
}

export default GameShow;
