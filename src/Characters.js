import React, { Component } from 'react';
import characters from './characters.json';


export default class Characters extends Component {

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

                            <div key={i}>
                                <img class="images" alt={char.name} src={char.image}></img>
                                <h3 id={char.name}>{char.name}</h3>
                                <p class="pseudos">{"aka " + char.pseudo}</p>
                                <p class="crews">{char.crew}</p>
                                <p class="bio">{char.text}</p>
                                <p class="primes">{char.bounty + ' B'}</p>
                                {/* <button onClick=""></button> */}
                            </div>

                        )
                    })
                }

            </div>

        )
    }
}