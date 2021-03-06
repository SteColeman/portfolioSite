import React from 'react';
import * as ReactDOM from 'react-dom'
import './Tile.css'
import LargeTile from './tileData/LargeTile';


function Tile(props) {

    /**
     * small times only display an image in the normal state. on hover they will display the title and github link, this is done via css
     * when a tile is clicked the LargeTile component is rendered with the properties passed from the small tile to the large tile (parent to child component)
     */

    return(
            <div className="tile" onClick={renderLargeTile} key={props.id} style={{backgroundImage: "url(" + props.imageUrl + ")"}}>
                <div className='tileTitle'>
                <h1>{props.name}</h1>
                </div>
                
                <div className='links'>
                    <h5>GitHub Repo</h5>
                    <p>{props.gitHubLink}</p>
                    <p>{props.techUsed}</p>
                </div>
            </div>
    )

    function renderLargeTile() {

        ReactDOM.render(
           <div id='largeTileContainer'>
                <LargeTile 
                key={props.id}
                name={props.name}
                description={props.description}
                imageUrl={props.imageUrl}
                gitHubLink={props.gitHubLink}
                techUsed={props.techUsed}
                />
           </div>, 
            document.getElementById('tileSection'))
        }
}
export default Tile
    
