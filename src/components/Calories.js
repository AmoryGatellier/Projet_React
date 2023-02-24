import React, { useState } from 'react'

function BesoinsCaloriques() {
    const [BC, setBC] = useState(0)
    const [activity, setActivity] = useState(1)
    const [genre, setGenre] = useState(66.5)
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [years, setYears] = useState(0)
    console.log(activity)

    const fonc = (e) => {
        e.preventDefault();
        setWeight(document.getElementById('poids').value);
        setHeight(document.getElementById('taille').value);
        setYears(document.getElementById('age').value);

        if (genre == 'Un Homme') {
            setBC((66.5 + (13.75 * weight) + (5 * height) - (6.77 * years)) * activity)
        } else {
            setBC((655.1 + (9.56 * weight) + (1.85 * height) - (4.67 * years)) * activity)
        }
    }


    return (
        <>
            <form onSubmit={fonc}>

                <div>
                    <label>Vous êtes ? </label>
                    <select onChange={e => { setGenre(e.target.value) }} value={genre}>
                        <option>Un Homme</option>
                        <option>Une Femme</option>
                    </select>
                </div>

                <div>
                    <label>Votre activité physique ? </label>
                    <select onChange={e => { setActivity(e.target.value) }} value={activity}>
                        <option value={1}>Journée passée au repos allongé</option>
                        <option value={1.2}>Travail sédentaire assis, pas de sport</option>
                        <option value={1.4}>Travail sédentaire avec 30 min de marche</option>
                        <option value={1.6}>Travail sédentaire et 1h de sport</option>
                        <option value={1.7}>Travail sédentaire et 1h30 à 2h de sport</option>
                        <option value={1.9}>Travail physique avec beaucoup de déplacement et 1h30 de sport</option>
                        <option value={1.2}>Travail physique et 3h à 4h de sport</option>
                    </select>
                </div>


                <div>
                    <label for="poids">Vous pesez ? </label>
                    <input type="text" id='poids'></input>
                    <span> Kg </span>
                </div>

                <div>
                    <label for="taille">Vous mesurez ? </label>
                    <input type="text" id='taille'></input>
                    <span> m </span>
                </div>

                <div>
                    <label for="age">Vous avez ? </label>
                    <input type="number" id='age'></input>
                    <span> ans </span>
                </div>

                <button type="submit">valider</button>
            </form>

            <p> Vos Besoins Caloriques: {Math.round(BC)} </p>
        </>
    )
}

export default BesoinsCaloriques