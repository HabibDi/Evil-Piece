import React, {Component} from 'react';
import characters from './characters.json';


export default class Characters extends Component {

    constructor (props) {

        super(props);
        this.state = {characters: characters.data}
    }


    
    render () {

        return (

            <div>

                {
                    this.state.characters.map((char, i) => {
                    
                        return (

                            <div key={i}>

                                <p>{char.name}</p>

                            </div>

                        )
                    })
                }

            </div>

        )
    }
}