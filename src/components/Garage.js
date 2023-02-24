import { useState } from 'react';
import Voiture from './Voiture'

function Garage() {
    // const carInfo = { name: "Ford", model: "Mustang" };
    const [car, setCar] = useState([{ nom: "Ford", model: "Mustang" }])

    // console.log("Dans le component Garage");
    // console.log(car);

    const handleSubmit = (e) => {
        e.preventDefault()

        let marque = e.target.children[0].value
        let ref = e.target.children[1].value
        if (marque === "" || ref === "") {
            alert("Il faut saisir les deux champs")
            return
        }

        let infoCar = {
            nom: marque,
            model: ref
        }

        setCar(car => {
            return [...car, infoCar]
        })
    }
    return (
        <>
            <Voiture
                info={car}
            />
            <form onSubmit={handleSubmit}>
                <input placeholder='name' />
                <input placeholder='model' />
                <button>Submit</button>
            </form>
        </>
    );
}

export default Garage