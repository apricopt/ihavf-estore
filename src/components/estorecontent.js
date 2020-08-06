import React , {useState , useEffect} from 'react'



import axios from "axios";

import Item from './item'

let dataToRender = [""];
let itemsToShow = [""];


function Estorecontent() {






  let [loading , setLoading] = useState(true);
  let [audio , setAudio] = useState([]);



useEffect(() => {
    
    axios.get("https://strapi.ihaveavisionfilms.com/audiostores").then((response) => {
    
      
      setAudio(response.data);
      
      setLoading(false);
      
     
      console.log(" yeh hai marasi reponse bava g",response.data);
    }).catch(err => console.log(err));
  }, []);





if (loading === false) {
  dataToRender = audio;
  
        itemsToShow = dataToRender.map(file => (
             <Item name={file.Name} genre={file.genre} tag={file.tag} price={file.price} url={file.audiofile[0].url} />
        ))
       
       console.log("g loading khatam ho chuki hai" , dataToRender )
     }







  
    return (
        <section className="liste-postes" data-scroll-identifiant="postes-disponibles">
        <div className="contenu min-width contenu-typewriter">
          <h1><strong>Beats</strong></h1>
        </div>
        {/* hungry div about to start */}
        <div id="hungryDiv" className="postes">
          {/* header started */}
          <div className="postes-header">
            <div className="titre">Beat title</div>
            <div className="localisation">Player</div>
            <div className="type" />
            <div className="departement">Buy</div>
            {/* <div class="postuler"></div> */}
          </div>
          {/* header ended */}
          {loading ?  <h1 style={{color:"white"}}>Loading the files .. </h1>: <React.Fragment>{itemsToShow}</React.Fragment>  }
          {/* hungry div about to end */}
        </div>
      </section>
    )
}

export default Estorecontent
