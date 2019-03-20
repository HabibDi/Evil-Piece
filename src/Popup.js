import React, { Component } from 'react';
import characters from './characters.json';


export default class Popup extends Component {

    constructor(props) {
        super(props);
        this.state = { characters: characters.data }
    }

    render() {

        return (
            <div>
                {
                    this.state.characters.map((char, i) => {
                        return (
                            <div class="popup" key={i}>
                                <img src={char.poster} alt={char.name + " Bounty Poster"} class="Poster" />
                                {/* <button onClick={this.props.closePopup}>Fermer</button> */}
                            </div>
                        )
                    })
                }
            </div>
        )

    }
}