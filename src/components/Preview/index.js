import React from "react"
import styles from "./styles/Preview.module.css"

export default function Preview() {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <h1>
                        A preview<br/>
                        of life's coming<br/>
                        attractions.<br/>
                    </h1>
                    <div className={styles.borderBottom}></div>
                    <p className={styles.text}>
                        Watch the video for a walk-through
                    </p>
                </div>
            </div>
            <div className={styles.video}>
                <iframe className={styles.videoDesktop}
                    width="818" 
                    height="460" 
                    src="https://www.youtube.com/embed/1C0Eo1lJN-Y" 
                    title="Assetz Marq | WalkThrough (Official) | Luxurious Living in Bangalore" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
                <iframe className={styles.videoMobile}
                    width="380" 
                    height="250" 
                    src="https://www.youtube.com/embed/1C0Eo1lJN-Y" 
                    title="Assetz Marq | WalkThrough (Official) | Luxurious Living in Bangalore" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
                
            </div>
        </section>
    )
}