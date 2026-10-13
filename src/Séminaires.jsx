const Seminaires=({seminaires})=>{

   return(

       <table className="table table-striped">
        <thead>
            <tr><th>Théme</th><th>Date début</th><th>date fin</th><th>Description</th><th>Côt Journalier</th><th>Durée</th><th>Coût Total séminaire</th>
             </tr>
        </thead>
        <tbody>
        {
         seminaires.map((s,pos)=> <tr key={pos}><td>{s.thème}</td><td>{s.date_debut}</td><th>{s.date_fin}</th><th>{s.description}</th><th>{s.cout_journalier}</th><th>{s.durée}</th><th>{s.durée*s.cout_journalier}</th>
             </tr>)

        }
        </tbody>
       <tfoot>
       
        Total des coûts des séminaires assurées est : {seminaires.reduce((acc,item)=>acc+=item.cout_journalier*item.durée,0)} DH
        </tfoot>
    </table>  
            


   )

}

export default Seminaires;