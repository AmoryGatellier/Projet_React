/* import React, { Component } from 'react';
let date = new Date;

class Heure extends Component {
    state = {
        date : new Date(),
    }

    componentDidMount() { 
        this.date = setInterval(() => this.setState(({date : new Date()})), 1000);
    }

    render(){
        return(
            <p>{this.state.date.toLocaleTimeString()}</p>
        )
    }
}
export default Heure;*/

import React, {useState,useEffect} from 'react';

  function Heure () {
  const [time,setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const intervalId = setInterval(() => {setTime(new Date().toLocaleTimeString())}, 1000);
  })

    return (
    <div>{time}</div>
    );
}

export default Heure;