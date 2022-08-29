import React from "react"
import styles from "./styles/Gallery.module.css"

const Gallery = () => {
    return (
        <section id="gallery" className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.header}>
                    <h1>
                        Gallery
                    </h1>
                </div>
                <div className={styles.borderBottom}></div>
                <p className={styles.text}>
                    Have a look into our world,<br/>
                    It's too large to miss.
                </p>
                <button className={styles.button}>Read More</button>
            </div>
            <div className={styles.galleryContainer}>
                <img className={styles.image1} src="/images/Green-walkways-homepage-gallery.jpg" alt="Green Walkways"/>
                <img className={styles.image2} src="/images/Top-view-of-central-park-homepage-gallery.jpg" alt="Central Park" />
                <img className={styles.image3} src="/images/Clubhouse-Homepage-gallery.jpg" alt="Clubhouse" />
                <img className={styles.image4} src="/images/Green-spaces-homepage-gallery.jpg" alt="Green Spaces"/>
                <img className={styles.image5} src="/images/Township-entrance-2.jpg" alt="Entrance" />
                <img className={styles.image6} src="/images/floorplans-homepage.jpg" alt="Floor Plans" />
                <img className={styles.image7} src="/images/Central-park-2-homepage-gallery.jpg" alt="Central Park 2" />
                <img className={styles.image8} src="/images/Balcony-homepage-gallery.jpg" alt="Balcony" />
            </div>
        </section>
    )
}

export default Gallery