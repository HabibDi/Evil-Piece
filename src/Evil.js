import React, {Component} from 'react' ;
import './Evil.css';
import Characters from './Characters';

// LE LIFECYCLE
// Etapes de base pour chaque component appelée une seule fois
// componentWillMount
// componentDidMount
// render -> la méthode qui permet d'afficher le contenu HTML du component

// Etapes déclenchées par le setState à chaque fois
// componentWillUpdate
// componentDIdUpdate
// render -> la méthode qui permet d'afficher le contenu HTML du component

class Evil extends Component {
    render() {
      return (
        <div className="Evil">
          <head>
            <title>Evil Piece</title>
          </head>
          <body>
            <div id="divtitle">
              <h1 id="title">Evil Piece</h1>
            </div>

            <Characters></Characters>
            <footer id="footer">lol</footer>
          </body>
          
        </div>
      );
    }
  }
  
  export default Evil;