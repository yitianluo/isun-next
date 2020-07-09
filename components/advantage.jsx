import React from "react";
import styles from "./advantage.module.css";


function Advantage(){
    return(
        <div className={styles.advantage}>
            <div className={styles.character}>
                <img src="/icons/safe.png"></img>
                <h1>First-class Paper Cup</h1>
                <p>ISUN was established in Nov.2002 and ran for <span>18 years.</span>Now we are specially making and exporting the highest quality paper cup ( with the world strictest <span>Germany TUV/LFGB certificates , SGS/FDA certificates, EU pharmaceutical standard of Microbiological criteria and hygienic certificates</span>,etc.)</p>
            </div>

            <div className={styles.character}>
                <img src="/icons/sitemap-solid.svg"></img>
                <h1>Complete Organizations</h1>
                <p>ANHUI ISUN International is Export Sales company of ANHUIBEST ISUN Group, which consists of <span>a I/E sales company, Two manufacturing Corps , one R&D institute and a overseas sales net.</span>Our Worshop located In Hefei industial Zone , occupy 2.26 hectare land with 40500 m³ workshop building of self property right.</p>

            </div>

            <div className={styles.character}>
                <img src="/icons/users-solid.svg"></img>
                <h1>Extrodinary Team</h1>
                <p>The Owner of the company started doing international trading business <span>29 years</span> ago. ANHUI ISUN group has strong management with a team of highly trained and experienced members. Each of us has either <span>PhD or Master degrees</span> in technology or business development from USA, Singapore and University Of Science & Technology of China.</p>

            </div>
        </div>
    )
}

export default Advantage;
