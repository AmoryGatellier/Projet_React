import React, { Component } from 'react';
class CounterButton extends Component {

    state = {
        compteur: 0
    }
    
    handleClick=() =>{
        this.setState(anciennevaleur => ({
            compteur : anciennevaleur.compteur + 1
    }))
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                Cliquez ici : {this.state.compteur}
            </button>
        )
    }
}

export default CounterButton;