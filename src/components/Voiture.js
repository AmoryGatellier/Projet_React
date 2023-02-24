function Voiture(props) {
    console.log(props);
    const car = props.info
    return (
        <>
            <ul>{car.map(c => <li>J'ai une {c.nom} {c.model}!</li>)}</ul>
        </>
    )
}

export default Voiture