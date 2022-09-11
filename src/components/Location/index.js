import React from "react"
import styles from "./styles/Location.module.css"

export default function Location() {
    return (
        <section id="location">
            <div className={styles.container} >
                <div className={styles.textContainer}>
                    <div className={styles.header}>
                        <h1>
                            Location
                        </h1>
                        <div className={styles.borderBottom}></div>
                        <p className={styles.text}>
                            When you have a world of your own, everything revolves<br/>
                            around you. Marq is strategically located in Whitefield,<br/>
                            which happens to be one of Bangalore’s fastest growing locales.<br/>
                        </p>
                        <button className={styles.button}>Read More</button>
                    </div>
                </div>
                <div className={styles.location}>
                    <img src="/images/Assetz-Marq-Location-Map.jpg" alt="Location" />
                </div>
            </div>
        </section>
    )
}