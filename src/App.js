import React from "react"
import Photo from "./components/Photo.js"
import Details from "./components/Details.js"
import ContactBtns from "./components/ContactBtns.js"
import Description from "./components/Description.js"
import Footer from "./components/Footer.js"


export default function App(){
    return(
    <div className="main-container">
    <Photo/>
    <Details/>
    <ContactBtns/>
    <Description/>
    <Footer/>
    </div>
    )
}