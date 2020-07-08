import React from "react";
import styles from "./landing.module.css";

function Landing(){
    return(
        <div className={styles.landing}>
            <img src="/landing-page.png"></img>
            <div className={styles.landingLeft}></div>
            <div className={styles.landingRight}>
                <div className={styles.text}>
                    <h1>Best Paper Cups</h1>
                    <h2>Luxury & Economy</h2>
                    <p>This is a place to find best luxury and economic paper cups made in China -- Anhui Isun Technology and International Trading.</p>
                </div>
            </div>
        </div>
    )
}

export default Landing;