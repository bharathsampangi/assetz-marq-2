import React from "react";
import styles from "./styles/Contact.module.css"

export default function Contact() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1>Contact</h1>
                <div className={styles.borderBottom}></div>
            </div>
            <div className={styles.contactContainer}>
                <form className={styles.inputContainer}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email Id" />
                    <input type="number" placeholder="Phone Number"/>
                    <input type="text" placeholder="Message" />
                    <div>
                        <input type="checkbox" checked/> I agree to recieve updates on Whatsapp
                    </div>
                    <button className={styles.button}>Submit</button>
                </form>
                <div className={styles.addressContainer}>
                    <p>
                        Assetz Marq, <br/>
                        (Next to Sai Laxmi industries),<br/>
                        Whitefield-Hoskote Main Road,<br/>
                        Kannamangala,<br/>
                        Bengaluru - 560067<br/>
                        <br/>
                        <br/>
                        enquiries@assetzproperty.com<br/>
                        +91 78295 54411
                    </p>
                </div>
                <div className={styles.address}>
                    <div className={styles.addressBox}>
                        <img src="/images/contact-assetz.png" alt="Assetz" />
                        <h3>Assetz Property Group</h3>
                        <p>
                            No.30 Crescent Road, Bengaluru,<br/>
                            Bengaluru – 560 001.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}