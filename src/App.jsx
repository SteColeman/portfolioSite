import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav.jsx';
import Tile from './Components/Tile/Tile.jsx';
import {data} from './Components/Tile/tileData/data.js';

function App() {
  /**
   * the UI is rendered with the nav component and tile container. the json data stored in components/tileData has each objects data mapped to the component 
   * and the properties are pushed through to the Tile component for rendering.
   */
  return (
    <div className="App">
      <Nav />
      <article id="tileSection">
       <div id='introduction'>
       <h1>Hello! Im Stephen Coleman</h1>
        <p>Im a junior front end developer fresh out of university. I am actively looking for front end web development jobs. if you have any available please use the contact me button to get in touch through </p>
       </div>
      <section id="tileContainer">
        
        {
          data.map((tile) => 
            <Tile 
              key={tile.id}
              name={tile.name}
              description={tile.description}
              imageUrl={tile.imageUrl}
              gitHubLink={tile.gitHubLink}
              frameworks={tile.frameworksUsed}
              techUsed={tile.techUsed}
            />
          )
        }

      </section>
      </article>

    </div>
  )
  
  
}

export default App;
