import React from 'react';
import GamesByUserContainer from './games_by_user_container';
import GamesIndexItem from './games_index_item';
import GameshelvesIndexContainer from '../gameshelves/gameshelves_index_container';


class GamesByUser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGameshelves(this.props.currentUser);
  }

  render() {
//     const user_games = this.props.gameshelves.map(gameshelf => {
//         for (let i = 0; i < gameshelf.games.length; i++) {
//           let userGames = [];
//           while (userGames.last != gameshelf.games[i]) {
//             debugger
//             userGames.push(gameshelf.games[i]);
//             i++;
//           }
//          // {
//           // for (let j = 0; j < userGames.length; j++) {
//           //   debugger
//           return (
//             <div className="no-touch">
//               <div className="box">
//                 <div className="innerContent">
//                     {userGames.map((userGame, i) => (
//
//                       <GamesIndexItem key={userGame} game={i} />
//                     )}
//
//                   <div className="titleBox">
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
// // }
//         // }
//         }
//     })
// backend - grab users game ids

    const user_games = this.props.gameshelves.map(gameshelf => {
      const userGames = [];
      // for (let i = 0; i < gameshelf.games.length; i++) {
      //   var userGames = [];
      //   while (userGames.last != gameshelf.games[i]) {
      //     debugger
      //     userGames.push(gameshelf.games[i]);
      //     i++;
      //   }
      // }
      // for (let i = 0; i < gameshelf.games.length; i++) {
      //   debugger
      //   let game = gameshelf.games[i];
      //   this.userGames.add(game);
      //   // userGames2.push(userGames);
      //   console.log(this.userGames);
      // }


      // for (let i = 0; i < gameshelf.games.length; i++) {
        debugger

        gameshelf.games.map(game => userGames.push(game));
        
      return (
        <div className="no-touch">
          <div className="box">
            <div className="innerContent">
              {userGames.map((userGame, i) =>
              <GamesIndexItem key={i} game={userGame} />
              )}
            </div>
          </div>
        </div>
      )

      })


      // gameshelf.map((game) => {
      // return (
      //   <div className="no-touch">
      //     <div className="box">
      //       <div className="innerContent">
      //         <GamesIndexItem key={game.id} game={game} />
      //       </div>
      //     </div>
      //   </div>
      // )})



    // {userGames.forEach((userGame, idx) => (
    //   <GamesIndexItem key={userGame[idx].id} game={idx} />
    // ))}

//     render() {
// const data =[{"name":"test1"},{"name":"test2"}];
// return (
//   <div>
//   {data.map(function(d, idx){
//      return (<li key={idx}>{d.name}</li>)
//    })}
//   </div>
// );
// }

    return (
      <div>
        <section className="gameshelf-box game-index"><GameshelvesIndexContainer /></section>
        <div id="wrap">
          <h2>My Games:</h2>
          { user_games }
        </div>
      </div>
    )
  }
}

export default GamesByUser;
