import React from "react";

function Card(props) {
    return (
        <div className="col-3 card">
            <div className="card-top">
                <h1 className="card-top-heading">{props.time}</h1>
            </div>         
            <div className="card-bottom">
                <h5 className="card-bottom-heading">{props.duration}</h5>
            </div>  
        </div>
    )
}



export default Card;