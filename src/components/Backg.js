import React, { useState }  from 'react';

function Backg () {
  const [color, setColor] = useState("")
  
  const fonct = () => {
    let a = document.getElementById('header')
    let b = document.getElementById('b')
    setColor(b.value)
    a.style.backgroundColor = color;
    console.log(a)
  }

    return (
      <div id='mode'>
          <input type="text" id='b' onChange={fonct}></input>
      </div>
  )
}

export default Backg;