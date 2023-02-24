import { useContext } from "react";
import { ExempleContext } from "./App";
import lune from "../assets/lune.png";
import soleil from "../assets/soleil.png";

function Modechange() {
    const mode = useContext(ExempleContext);
    let bg = mode[0].back;
    let txt = mode[0].text;

    const fonc = () => {
        let a = document.getElementById('header');
        a.style.backgroundColor = bg;
        a.style.color = txt;

        if (bg === mode[0].back) {
            bg = mode[1].back;
            txt = mode[1].text;
        } else {
            bg = mode[0].back;
            txt = mode[0].text;
        }
    }

    return (
        <div id='mode'>
            <button id='bouton_mode' onClick={fonc}> <img width="30" src={lune} alt='lune' /> / <img width="30" src={soleil} alt='soleil' />
            </button>
        </div>
    )
}

export default Modechange