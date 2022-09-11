import React from "react"
import styles from "./styles/Navigation.module.css"

const Navigation = () => {
    const scrollTo = (to) => {
        const section = document.querySelector(`#${to}`);
        console.log("section", section)
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <img src="/images/Assetz-header-logo.png" alt="Logo" className={styles.logo}/>
                <ul>
                    <li className={styles.link}>About</li>
                    <li className={styles.link} onClick={() => scrollTo('township')}>The Township</li>
                    <li className={styles.link}>The Park</li>
                    <li className={styles.link}>Amenities</li>
                    <li className={styles.link} onClick={() => scrollTo('contact')}>Contact</li>
                </ul>
            </nav>
            <img src="/images/marq-footer-logo.png" alt="Marq" className={styles.logoHeader} />
        </header>
    )
}

export default Navigation