import React from "react"
import styles from "./styles/Middle.module.css"

const Middle = () => {
    return (
        <section className={styles.middleContainer}>
            <img alt="Middle" src="/images/Middle-Pic.jpg" className={styles.image} />
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <h1>
                        From old Bangalore to<br/>
                        our modern metro,<br/>
                        live the best of both<br/>
                        worlds.<br/>
                    </h1>
                    <div className={styles.borderBottom}></div>
                    <p className={styles.text}>
                        Discover the township with that cradles the<br/>
                        old charm with the modern day progress.
                    </p>
                </div>
            </div>
            <div className={styles.video}>
                <iframe className={styles.videoDesktop}
                    width="818" 
                    height="460" 
                    src="https://www.youtube.com/embed/17CLxxZf6a8" 
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
                <iframe className={styles.videoMobile}
                    width="380" 
                    height="250" 
                    src="https://www.youtube.com/embed/17CLxxZf6a8" 
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
            </div>
        </section>
    )
}

export default Middle