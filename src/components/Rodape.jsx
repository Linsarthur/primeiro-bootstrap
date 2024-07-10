import "../assets/Rodape.css"
import {Link} from "react-router-dom";


function Rodape () {
    return(
        <footer className={"rodaps"}>
         <Link className="linkPolitica" to="../PoliticaDePrivacidade">Politica de Privacidade</Link>


        </footer>

    )
}

export default Rodape;