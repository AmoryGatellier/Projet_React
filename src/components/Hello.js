import React, { useState } from 'react';    			
// class Hello extends Component {

//     state = {
//             name : ""
//         };

//             handleChange = (e) => {
//                 this.setState({name: e.target.value})
//             }
        
//   render() {
//     return (
//       <div className="container">
//         <h1>Bonjour, {this.state.name}</h1>
//         <input type="text"
//          value={this.state.name}
//         onChange = {this.handleChange}/>
//       </div>
//     );
//   }
// }

function Hello(){

  const [name, setName] = useState("")

  return(
    <>
    <h1>Bonjour, {name}</h1>
            <input type="text"
             value={name}
            onChange = {e => setName(e.target.value)}/>
            </>
  )
}
export default Hello