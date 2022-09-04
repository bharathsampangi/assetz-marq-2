import React from "react"
import Hero from "../Hero"
import Township from "../Township"
import Middle from "../Middle"
import Gallery from "../Gallery"
import Preview from "../Preview"

const Home = () => {

    const scrollTo = (to) => {
        const section = document.querySelector(`#${to}`);
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    return (
        <>
            <Hero scrollTo={scrollTo} />
            <Township />
            <Middle />
            <Gallery />
            <Preview />
        </>
    )
}

export default Home