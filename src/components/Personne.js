/* import React, { Component } from 'react';

class Hello2 extends Component {
    state = {
        name : '',
        age : ''
    }

    render(){
        return(
            <>
                <input type = 'text' placeholder={'Name'} value={this.state.name} onChange={e => this.setState({name : e.target.value})}/>
                <input type = 'number' placeholder={'Age'} value={this.state.age} onChange={e => this.setState({age : e.target.value})}/>

                <h1>Bonjour {this.state.name}, You are {this.state.age} years old</h1>
            </>
        )
    }
}
export default Hello2; */

import React, { useState } from 'react';

function Personne2() {

    const [nom, setNom] = useState("")
    const [age, setAge] = useState("")

    return (
        <>
            <h1>Bonjour {nom}, tu as {age} ans </h1>
            <input type="text" placeholder='nom' onChange={e => setNom(e.target.value)}>
            </input>

            <input type="number" placeholder='age' onChange={e => setAge(e.target.value)}>
            </input>
        </>
    )

}
export default Personne2;