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
            />
          )
        }

      </section>
      </article>

    </div>
  )
  
  
}

export default App;
