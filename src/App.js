import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
  <header>
    {/* navigation button and dropdown menu... */}
    <div className="dropdown">
      <div className="dropdown-button">
        <i className="fas fa-bars" />
      </div>
      <div className="dropdown-content dropDown-hidden">
        <a className="dropdown-link" href="./index.html">
          Home
        </a>
        <a className="dropdown-link" href="./Pages/about.html">
          About
        </a>
        <a className="dropdown-link" href="./Pages/QA.html">
          Q&amp;A
        </a>
        <a className="dropdown-link" href="./Pages/login.html">
          Account Login
        </a>
      </div>
    </div>
    <div className="center-content">
      <h1>HairCare</h1>
      <p>Find the stylist right for you</p>
      <div className="video-container">
        <div className="overlay" />
        <video autoPlay loop muted>
          <source src="./IMG/badass-woman.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="header-button">
        <a href="#Stylist-main">Book Now</a>
      </div>
    </div>
  </header>
  {/* selection section..... */}
  <div className="main-container">
    <section className="aboutUs">
      <div className="aboutUs-text">
        <h2>About us</h2>
        <p>Learn more about our wonderful work</p>
        <button className="button-about">
          <a href="./Pages/about.html">More info</a>
        </button>
        <div className="layoutAb" />
      </div>
    </section>
    <section id="Stylist-main" className="selection-container">
      <div className="area-buttons">
        <h2>Select Stylist in your area</h2>
        <ul>
          <li data-tab="all" className="btn-on activeOn animated shake">
            All
          </li>
          <li data-tab="north" className="btn-on animated">
            North Side
          </li>
          <li data-tab="downtown" className="btn-on animated">
            Downtown
          </li>
          <li data-tab="south" className="btn-on animated">
            South Side
          </li>
        </ul>
      </div>
    </section>
    {/* Stylist section and dropdown content.... */}
    <section className="st-main">
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Stylist Name
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Letter of Marque rope's end brigantine Jack Ketch lass parrel
                cutlass Yellow Jack mizzenmast doubloon overhaul scurvy lanyard
                hail-shot chantey. Cat o'nine tails ahoy yo-ho-ho pink booty
                haul wind brig measured fer yer chains swing the lead lugsail
                grog flogging stern gibbet bilged on her anchor. Stern mutiny
                strike colors belay mizzenmast bounty scallywag yardarm Shiver
                me timbers coffer mizzen boom haul wind spike Jack Ketch. Rum
                boom cackle fruit gally shrouds ye scallywag fire in the hole
                swab port nipperkin dead men tell no tales measured fer yer
                chains loot Brethren of the Coast. Lugger American Main
                gangplank Admiral of the Black Buccaneer belay parrel gabion
                lass rum bring a spring upon her cable bilge water Shiver me
                timbers pirate galleon. Weigh anchor keelhaul ye starboard bucko
                transom yo-ho-ho nipper belay black spot take a caulk bilged on
                her anchor line smartly fluke. <br />
                Cable bilge rat brig loaded to the gunwalls clipper wherry
                nipperkin snow parley cackle fruit Chain Shot log long clothes
                take a caulk Corsair. Pieces of Eight draught handsomely spike
                sheet brig careen run a rig aft yawl scourge of the seven seas
                pirate man-of-war quarterdeck code of conduct. Hearties loot
                Buccaneer warp topsail tender jack fire in the hole boatswain
                transom swab spyglass crack Jennys tea cup fore hang the jib.
                Dead men tell no tales measured fer yer chains long clothes
                squiffy hempen halter transom Buccaneer pirate Yellow Jack
                nipper yo-ho-ho loaded to the gunwalls gun deadlights barkadeer.
                Letter of Marque bring a spring upon her cable doubloon strike
                colors long clothes bilge rat red ensign long boat carouser
                fluke gaff lookout tack knave log. Black jack nipperkin yo-ho-ho
                dance the hempen jig broadside topsail piracy fathom mizzenmast
                take a caulk run a rig hands Nelsons folly warp draught.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-tab="south" className="st-infoBox animated bounceIn">
        <img src="./IMG/stylist1.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="north" className="st-infoBox animated bounceIn">
        <img src="./IMG/beauty-curly.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="downtown" className="st-infoBox animated bounceIn">
        <img src="./IMG/adults-afro-afro-hair.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="north" className="st-infoBox animated bounceIn">
        <img src="./IMG/st2.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="downtown" className="st-infoBox animated bounceIn">
        <img src="./IMG/st3.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="south" className="st-infoBox animated bounceIn">
        <img src="./IMG/st4.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="downtown" className="st-infoBox animated bounceIn">
        <img src="./IMG/st5.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="north" className="st-infoBox animated bounceIn">
        <img src="./IMG/st6.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="south" className="st-infoBox animated bounceIn">
        <img src="./IMG/st7.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="south" className="st-infoBox animated bounceIn">
        <img src="./IMG/st8.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="downtown" className="st-infoBox animated bounceIn">
        <img src="./IMG/st11.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
      <div data-tab="downtown" className="st-infoBox animated bounceIn">
        <img src="./IMG/st10.jpg" alt="stylist-img" />
        <h2>Stylist Name</h2>
        <div className="display hidden">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat sequi amet dolores, illo fugiat quia.
            Voluptatum, dolor mollitia culpa voluptate aliquid nesciunt saepe
            sapiente quibusdam explicabo nemo omnis nostrum.
          </p>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            More Information
          </button>
        </div>
      </div>
    </section>
  </div>
  {/* contact section..... */}
  <address className="contact-section">
    <h2>Contact</h2>
    <p>
      if you have question in regards of your stylist, please contact us
      <br />
      <br />
      1234 fourfivethree ave <br />
      123-334-3454 <br />
      <a href="mailto:"> info@haircare.com </a>
    </p>
  </address>
  {/* footer section.... */}
  <footer>
    <p>
      Made with <i className="fas fa-heart" /> and{" "}
      <i className="fas fa-coffee" /> by Yarriba Castro and Jacqueline Omollo
    </p>
    <p>
      <i className="far fa-copyright" /> All rights reserved to HairCare.com
    </p>
  </footer>
</div>

  );
}

export default App;
