import Seminaires from './Séminaires.jsx';

const Animateur=({animateur})=>{
    return (

        <li className="list-group-item"> <strong>{animateur.nom_complet}</strong> <Seminaires  seminaires={animateur.séminaires}/> </li>

    )

}

export default Animateur;