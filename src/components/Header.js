import React from "react";
import { Link} from "react-router-dom"

function Headers() {
    return(
        <nav>
            <Link to="/"><button>Accueil</button></Link>
            <Link to="/calories"><button>Calories</button></Link>
            <Link to="/compteur"><button>Compteur</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
            <Link to="/counter"><button>Counter</button></Link>
            <Link to="/effect"><button>Effect</button></Link>
            <Link to="/garage"><button>Garage</button></Link>
            <Link to="/hello"><button>Hello</button></Link>
            <Link to="/heure"><button>Heure</button></Link>
            <Link to="/personne"><button>Personne</button></Link>
            <Link to="/linechart"><button>LineChart</button></Link>
            <Link to="/toggle"><button>Toggle</button></Link>
            
        </nav>
    );
}
export default Headers;