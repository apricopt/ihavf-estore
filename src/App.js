import React from 'react';

import './App.css';



// importing components here

import Header from './components/header'
import Hero from './components/hero'
import Estorecontent from './components/estorecontent'





function App() {
  return (
    <div className="App">
     <div
      data-transition="wrapper"
      class="page-template page-template-template-carriere page-template-template-carriere-php page page-id-462 full_scroll"
    >
      <Header />
      {/* <div className="gradient"></div> */}
      <main
        class="default-template"
        data-transition="container"
        data-transition-namespace="carriere"
        data-admin-bar-page-url=""
        data-admin-bar-page-label="Edit Page"
      >
      <Hero />
      <Estorecontent />



</main>




    </div>
    </div>
  );
}

export default App;
