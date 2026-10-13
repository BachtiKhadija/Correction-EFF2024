import {useState} from "react";



const FormSeminaire=()=>{
    const[formData,setFormData]=useState({});
    const[message,setMessage]=useState("")
    const handelChange=(e)=>
    {
       const {name,value}=e.target;
       if(value.trim()==="")return 
      setFormData({...formData,[name]:value});


    }

    const handelSubmit=(e)=>{
         e.preventDefault();
         if(Object.keys(formData).length==0)return;
          const date1 = new Date(formData.dateDebut);
          const date2 = new Date(formData.dateFin);

            // Différence en millisecondes
            const differenceMs = date2.getTime() - date1.getTime();

           // Conversion en jours (1000 ms * 3600 s * 24 h)
           const nombreDeJours = (differenceMs / (1000 * 3600 * 24))+1;






         setMessage(`l'animateur : ${formData.animateur} assurera le théme : ${formData.theme} ,avec un coût journalier : ${formData.cout} DH, pour une durée de : ${nombreDeJours}, avec un coût total de ${nombreDeJours*formData.cout} DH`);



    }


    return(
          <div className="card w-75 mx-auto">
              <div className="card-header"><h2>Formulaire du séminiare</h2></div>
              <div className='card-body'>
                  <form onSubmit={handelSubmit}>
                    <div className="mb-3">
                        <label>Theme</label>
                        <input type="text" className="form-control" value={FormData.theme} name="theme" onChange={handelChange}/>
                    </div>
                   <div className="mb-3">
                        <label >Date Début</label>
                        <input type="date" className="form-control" value={FormData.dateDebut} name="dateDebut" onChange={handelChange}/>
                    </div>
                     <div className="mb-3">
                        <label>Date Fin</label>
                        <input type="date" className="form-control" value={FormData.dateFin} name="dateFin" onChange={handelChange}/>
                    </div>
                        <div className="mb-3">
                        <label >Coût</label>
                        <input type="number" className="form-control" value={FormData.cout} name="cout" onChange={handelChange}/>
                    </div>
    <div className="mb-3">
                        <label >Animateur</label>
                        <input type="text" className="form-control" value={FormData.animateur} name="animateur" onChange={handelChange}/>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Confirmer</button>
                    </div>




                  </form>
                 {
                    Object.keys(formData).length>0&&(
                                            <div className="card-header">
                                               {message}
                                            </div>

                                                  )
                 }




              </div>








          </div>



    )






}

export default FormSeminaire;