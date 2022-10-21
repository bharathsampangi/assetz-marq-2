import React from "react"
import styles from "./styles/Hero.module.css"

const Hero = ({ scrollTo }) => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h1>The 22-acre township</h1>
                    <h1>for a life better lived</h1>
                    <p>We breathe the air you travel for</p>
                </div>
                <div className={styles.boxContainer}>
                    <div className={styles.box} onClick={() => scrollTo('location')}>
                        <span className={styles.number}>01</span>
                        <p>Location</p>
                    </div>
                    <div className={styles.box} onClick={() => scrollTo('gallery')}>
                        <span className={styles.number}>02</span>
                        <p>Gallery</p>
                    </div>
                    <div className={styles.box}>
                        <span className={styles.number}>03</span>
                        <p>Floor Plans</p>
                    </div>
                </div>
            </section>
            <section className={styles.hero2Container}>
                <div className={styles.hero2}>
                    <img className={styles.hero2Image} src="/images/green-worldmap.jpg" alt="Map" />
                    <div className={styles.hero2TextContainer}>
                        <div className={styles.hero2Text1}>
                            <span>Marq 3.0</span><br/>
                            <span>30% park space</span>
                        </div>
                        <div className={styles.hero2Text2}>
                            <span>Join the</span><br/>
                            <span>Park People</span>
                        </div>
                        <div className={styles.hero2Text3}>
                            <p>With homes that have more park</p>
                            <p>per living space than the</p>
                            <p>world's biggest metropolises.*</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero