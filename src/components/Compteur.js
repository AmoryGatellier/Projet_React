/* import React, { Component } from 'react'; 

class Compteur extends Component {
    state = {
        n : 0
    }

    handleClickMore=() =>{
        if (this.state.n < 5){
            this.setState(x => ({
                n : x.n + 1
            }))
        }else{
            alert('limite atteinte')
        } 
    }

    handleClickLess=() =>{
        if (this.state.n > 0){
            this.setState(x => ({
            n : x.n - 1
        }))
        }else{
            alert('limite atteinte')
        }
    }

    render(){
        return(
            <>
                <h2>Compteur : {this.state.n}</h2>
                <button onClick={this.handleClickMore}>+</button>
                <button onClick={this.handleClickLess}>-</button>
            </>
        )
    }
} 
export default Compteur;*/

import React, { useState } from 'react' ;

function Compteur2() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {if(count < 5 ){
                setCount(count + 1)}else{
                    alert('limite atteinte')
                }}}>
            Ajouter 1
            </button>
            <button onClick={() => {if(count > 0 ){
                setCount(count - 1)}else{
                    alert('limite atteinte')
                }}}>
            Retirer 1
            </button>
        </div>
  );
}

export default Compteur2;