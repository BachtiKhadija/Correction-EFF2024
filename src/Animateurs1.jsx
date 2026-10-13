
import Animateur from "./Animateur.jsx";

const Animateurs1=({animateurs})=>{

      return (
            <ul className="list-group">
                {
                 animateurs.map((a,pos)=>{return <Animateur key={pos} animateur={a}/>})
                }

            </ul>




      )



    }
    export default Animateurs1;