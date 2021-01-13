import React from "react";
import Card from "./Card";




function Cards() {

    var [second, setSecond] = React.useState("60");
    var [minute, setMinute] = React.useState("55");

    
    
    window.onload = function () {
        setInterval(() => {setSecond(prevalue => {
            if (prevalue === 0 ) {

                setMinute(preval => {
                    return (preval -1)
                });
                return prevalue = 60;
            } else {
                return (prevalue-1);
            }
        })}
        ,1000);
    }
        


 



    return (
        <div className="container-fluid">
            <div className="row">
                <Card time="08" duration="DAYS" />
                <Card time="23" duration="HOURS" />
                <Card time={minute} duration="MINUTES" />
                <Card time={second} duration="SECONDS" />

                
            </div>
           
        </div>
   
    )
}



export default Cards;