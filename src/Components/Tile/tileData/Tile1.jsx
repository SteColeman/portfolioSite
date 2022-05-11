import './Tile.css'
import {data} from './tileData/data.js';
import LargeTile from './LargeTile.jsx'

function Tile() {
    const tileArray = [];
    
    for (var i=0; i<data.length; i++) {
        tileArray.push(
        <div className='tileContainer' key={data[i].id}>
            <div className="tile">
                <h1>{data[i].name}</h1>
                <div className='imageContainer'>
                    <img className="tileImage" src={data[i].imageUrl} alt="" />
                </div>
                <div className='links'>
                <p>{data[i].gitHubLink}</p>
                <p>{data[i].liveLink}</p>
                </div>
                <div className='description'>
                <p>{data[i].description}</p>
                </div>
            </div>
        </div>
        )
    }

    return( 
        <div>tileArray onClick = <LargeTile /></div>
        
        
        )

}

export default Tile;