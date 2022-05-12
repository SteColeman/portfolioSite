import './LargeTile.css'
// import * as ReactDOM from 'react-dom'
// import Tile from '../Tile.jsx';


function LargeTile(props) {

    /**
     * the large tile coponent takes property inputs from tis parent component (tile.jsx)
     * all the data from the json file is now displayed. a close button on the tile refreshes the site back to its original home screen by calling windowReload function
     */


    return(
        <div className="largeTile"  key={props.id}>
            <div>
                <h1>{props.name}</h1>
            </div>

            <div className='largeImageContainer'>
                <img className="largeTileImage" src={props.imageUrl} alt="" />
            </div>

            <div className='linksDescriptionSection'>
                <div className='LargeLinks'>
                    <h3>GitHub Repository</h3>
                    <p>{<a href={props.gitHubLink}>GitHub</a>}</p>
                </div>

                <div className='largeDescription'>
                    <h3>Description</h3>
                    <p>{props.description}</p>
                </div>

                <div className="technologyUsed">
                    <h3>Languages and frameworks used in this project</h3>
                <p>{props.techUsed}</p>
                </div>

            </div>

            <button onClick={windowReload}>Close</button>
        </div>
    )
    
    function windowReload() {
        window.location.reload()
    }
}

export default LargeTile;