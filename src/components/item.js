import React, { useState , useEffect } from 'react'

import StripeCheckout from "react-stripe-checkout"

import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();



function Item(props) {

  const [product] = React.useState({
    name: props.name,
    genre: props.genre,
    price: props.price * 100,
    tag: props.tag,
    audio: props.url
  });


  






  async function makePayment(token, addresses) {
    const response = await axios.post(
      "https://node.ihaveavisionfilms.com/payment",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }


    
let button = "";
  if (product.tag =="FreeDownload") {
    button = 
    <button  className="departement cta" style={{ fontSize: "10px" }}>
    Free Download
  </button>
  }else {
    button = 

    <div>
        <StripeCheckout
          
          stripeKey={"pk_test_51GysLGAcMtw02qBmOKZ2OEYQfawQAvmV8NX8oD8u5RET0QbC7I6M2gXFie0FOFCWMUD6UqOSfU5IkbnZ3sk7RFjB00oaYkS2jd"}
          token={makePayment}
          name="Buy Audiofile"
          amount={product.price * 100}
          name={product.name}
        
        >

          <button  id="moneybutton" className="departement cta" style={{ fontSize: "10px" }}>
            Buy ${product.price}
          </button>

        </StripeCheckout> 
        </div> 

  }
  






  let catClass = ""

  if (product.tag == "FreeDownload") {
    catClass = "btn-free"
  } else if (product.tag == "StandardLease") {
    catClass = "btn-standard"
  } else if (product.tag == "ExclusiveLease") {
    catClass = "btn-exclusive"
  } else if (product.tag === "AudioForFilm") {
    catClass = "btn-film"
  }




  return (

    <React.Fragment>

      <div className="postes-row">
        <div className="titre">
          <h3>{product.name}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>

              <div><h6 style={{ fontSize: "12px" }} className="btn-genre"> Genre: {product.genre}</h6></div>
              <div className={catClass} style={{ display: 'flex', justifyItems: 'flex-start' }}>
                {product.tag}
              </div>
            </div>
          </h3>
        </div>


        <div className="localisation">
          <audio controls>
            <source src={"https://strapi.ihaveavisionfilms.com" + product.audio} />
            Your browser does not support the audio element.
          </audio>
        </div>



        <div className="type">
          <h3 />
        </div>



      
{button}

        








        <div className="mobile-infos">
          <div className="titre"><h3>${'{'}item.Name{'}'}
            <a href="#" className="btn-free">Free Download</a>
            <a href="#" className="btn-standard">Standard Lease</a>
            <a href="#" className="btn-exclusive">Exclusive Lease</a>
          </h3></div>
          <div className="localisation">
            <audio controls style={{ width: '250px' }}>
              <source src />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="type" />
          {/* stripe button here */}
          <StripeCheckout />
        </div>
      </div>
    </React.Fragment>

  )
}

export default Item
