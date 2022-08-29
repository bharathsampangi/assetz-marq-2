import React from "react"
import styles from "./styles/Township.module.css"

const Township = () => {
    return (
        <section className={styles.township}>
            <div className={styles.townshipImage}>
                <img src="/images/TWCH.jpg" />
            </div>
            <div className={styles.townshipText}>
                <div className={styles.header}>
                    <h1>The</h1>
                    <h1>township</h1>
                    <h1>we call</h1>
                    <h1>home</h1>
                    <div className={styles.borderBottom}></div>
                </div>
                <div className={styles.textBox}>
                    <p>
                        Sprawled over 22 acres stands Marq,<br/>
                        a township with 3 & 4 BHK apartments in Whitefield,<br/>
                        for those who have found their space complete with the relaxed air<br/>
                        and natural calm that comes with feeling utterly at home.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </section>
    )
}

export default Township