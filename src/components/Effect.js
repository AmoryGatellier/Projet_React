import React, {useState, useEffect} from 'react'

function Effect(){
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Mon compteur est à ${count}`
  }, [count])



  return(
    <>
    <h1>Compteur: {count}</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default Effect