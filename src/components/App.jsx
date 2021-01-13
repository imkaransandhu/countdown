import React from "react";
import Heading from "./Heading/Heading";
import Card from "./Cards/Cards"
import Social from "./Social/Social";





function App () {
    return (
        <div>
            <div className="star-background">
                <Heading />
                <Card />
            </div>
            
            <Social />
        </div>
    )
}



export default App;