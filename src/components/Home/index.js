import React from "react"
import Hero from "../Hero"
import Township from "../Township"
import Middle from "../Middle"
import Gallery from "../Gallery"
import Preview from "../Preview"
import Location from "../Location"
import Contact from "../Contact"
import Footer from "../Footer"

const Home = ({scrollTo}) => {
    return (
        <>
            <Hero scrollTo={scrollTo} />
            <Township />
            <Middle />
            <Gallery />
            <Preview />
            <Location />
            <Contact />
            <Footer />
        </>
    )
}

export default Home