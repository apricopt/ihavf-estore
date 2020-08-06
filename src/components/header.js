import React from 'react'

function Header() {
    return (
        <header>
        <div id="top-left">
          <div>
            <div className="burger">
              <span /><span /><span /><span />
            </div>
            <a className="logo" href="https://ihaveavisionfilms.com"><img src="../wp-content/themes/fatfish/img/logo.svg" alt="logo" /></a>
          </div>
        </div>
        <div id="tiroir-nav">
          <nav className="nav-principale">
            <ul id="menu-menu-principal-en" className="menu">
              <li id="menu-item-940" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-940">
                <a href="https://ihaveavisionfilms.com/about-us/index.html">About us</a>
              </li>
              <li id="menu-item-387" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-387">
                <a href="../ihave/services/index.html">Services</a>
                <ul className="sub-menu">
                  <li id="menu-item-510" className="menu-item menu-item-type-post_type menu-item-object-application menu-item-510">
                    <a href="../ihave/services/index.html#music-videos">Music videos</a>
                  </li>
                  <li id="menu-item-512" className="menu-item menu-item-type-post_type menu-item-object-application menu-item-512">
                    <a href="../ihave/services/index.html#short-films">Pilot episode and short film conceptualization</a>
                  </li>
                  <li id="menu-item-509" className="menu-item menu-item-type-post_type menu-item-object-application menu-item-509">
                    <a href="../ihave/services/index.html#corporate-videos">Corporate/professional videos</a>
                  </li>
                  <li id="menu-item-509" className="menu-item menu-item-type-post_type menu-item-object-application menu-item-509">
                    <a href="../ihave/services/index.html#graphic-design">Graphic and logo design</a>
                  </li>
                  <li id="menu-item-509" className="menu-item menu-item-type-post_type menu-item-object-application menu-item-509">
                    <a href="../ihave/services/index.html#party-fliers">Party/event fliers</a>
                  </li>
                  <li id="menu-item-509" className="menu-item menu-item-type-post_type menu-item-object-application menu-item-509">
                    <a href="../ihave/services/index.html#real-estate-photography">Real estate photography</a>
                  </li>
                  <li id="menu-item-509" className="menu-item menu-item-type-post_type menu-item-object-application menu-item-509">
                    <a href="../ihave/services/index.html#social-media">Social media content creation and management</a>
                  </li>
                  <li id="menu-item-509" className="menu-item menu-item-type-post_type menu-item-object-application menu-item-509">
                    <a href="../ihave/services/index.html#commercial-visuals">Commercial visuals</a>
                  </li>
                  <li id="menu-item-509" className="menu-item menu-item-type-post_type menu-item-object-application menu-item-509">
                    <a href="../ihave/services/index.html#event-recording">Special event recording/recap (photo &amp; video)</a>
                  </li>
                  <li id="menu-item-509" className="menu-item menu-item-type-post_type menu-item-object-application menu-item-509">
                    <a href>Documentary-style content</a>
                  </li>
                </ul>
              </li>
              <li id="menu-item-942" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-942">
                <a href />
              </li>
              <li id="menu-item-943" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-943">
                <a href="../portfolio/index.html">portfolio</a>
              </li>
              <li id="menu-item-943" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-943">
                <a href="../about-us/index.html#our-merchendise">Merchandise</a>
              </li>
              <li>
                <a href="javascript:void(0)" id="menu-mobile-contact">Contact us!</a>
              </li>
            </ul>
          </nav>
          <div className="reseaux-sociaux-mobile">
            <a href="https://www.linkedin.com/company/IHVF"><i className="fab fa-linkedin" /></a><a href="https://www.youtube.com/IHVFofficial"><i className="fab fa-youtube-square" /></a><a href="https://vimeo.com/IHVFofficial"><i className="fab fa-vimeo-square" /></a><a href="https://www.instagram.com/IHVF.official"><i className="fab fa-instagram-square" /></a><a href="https://www.facebook.com/IHVF.real/"><i className="fab fa-facebook-square" /></a>
          </div>
        </div>
        <div id="top-right">
          <div>
            <a href="../about-us/index.html">About us</a>
            <a href="../portfolio/index.html">Portfolio</a><a href="../ihave/services/index.html">Services</a>
          </div>
        </div>
        <a href="javascript:void(0)" id="bottom-right"><span className="visible">Scroll</span><span className="scrollToNext">Scroll</span><span className="returnToTop">Return</span>
          <div className="ligne" /></a>
        <div className="overlay-header hidden" />
      </header>
        
    )
}

export default Header
