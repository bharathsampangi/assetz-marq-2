import React from "react"
import styles from "./styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerOne}>
                <div className={styles.footerColumn1}>
                    <img src="./images/marq-footer-logo.png" alt="Footer" />
                </div>
                <div className={styles.footerColumn2}>
                    <img src="./images/EBrochureDownload-Button.png" alt="E-Brochure" />
                </div>
                <div className={styles.footerColumn3}>
                    <p>
                        +91 78295 54411<br/>
                        <span className={styles.email}>enquiries@assetzproperty.com</span>
                    </p>
                </div>
            </div>
            <div className={styles.footerTwo}>
                &copy; 2022-2023 Assetz Property Group. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer