import React, { useState } from 'react';

function Fruits() {
    const [fruit, setfruit] = useState('a')

    return (
        <>
            <h1>{fruit} {(fruit.charAt(fruit.length-1))}
            </h1>
            <input type="text" id='add' placeholder='fruit'></input>
            <button onClick={() => setfruit(document.getElementById('add').value)}>Ajouter</button> 
        </>
    )
}
export default Fruits;