import React from "react";
import styles from "./copyright.module.css"

function Copyright(){

    const year = new Date().getFullYear();

    return(
        <div className={styles.copyright}>
            <div className={styles.imgDiv}>
                <img src="/copyright/twitter-brands.svg"></img>
                <img src="/copyright/facebook-brands.svg"></img>
                <img src="/copyright/instagram-brands.svg"></img>
                <img src="/copyright/envelope-regular.svg"></img>
            </div>
            <p>Copyright@{year}</p>
        </div>
    )
}

export default Copyright;