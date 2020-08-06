import React from 'react'


import img1 from "./img1.png"

function Hero() {
    return (
        <section className="intro">
        <div className="contenu min-width contenu-typewriter">
          <h1>AUDIO<strong> E-STORE</strong></h1>
          <p>
            Buy audio data online without any hassel 
          </p>
          <p />
        </div>
        <div className="bg-image" style={{backgroundImage: `url(${img1})`}} />
      </section>
    )
}

export default Hero
