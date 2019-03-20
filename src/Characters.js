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

                            <div className="time" key={i}>
                                <img className="images" alt={char.name} src={char.image} data-aos="fade-right" data-aos-delay="300"></img>
                                <h3 className="names" data-aos="fade-right">{char.name}</h3>
                                <div id="pseudofond1" data-aos="fade-right" data-aos-delay="900"><p className="pseudos" data-aos="fade-right" data-aos-delay="600">{"aka " + char.pseudo}</p></div>
                                <div id="pseudofond2" data-aos="fade-right" data-aos-delay="900"><p className="crews" data-aos="fade-right" data-aos-delay="700">{char.crew}</p></div>
                                <div className="fondtext" data-aos="fade-left" data-aos-delay="600"><p className="bio">{char.text}</p></div>
                                <p className="primes" data-aos="fade-left" data-aos-delay="600">{char.bounty + ' B'}</p>
                                <button onClick=""></button>
                            </div>

                        )
                    })
                }

            </div>

        )
    }
}