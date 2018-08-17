import React from 'react';

// creates Grid component to render to the page
const Grid = (props) => {
    return (
        
        <div className="tile" onClick={() => props.scoreUpdate(props.id, props.clicked)} >

            <img src={props.imgUrl} alt={props.name} className="tile-img" />

        </div>
    );
};

export default Grid;