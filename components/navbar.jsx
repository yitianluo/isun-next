import React from "react";
import styles from "./navbar.module.css";

function NavBar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.logoDiv}>
                <img src="/logo.png" />
                <h1>ISUN</h1>
            </div>

            <div className={styles.menuDiv}>
                <p>Category</p>
                <p>Pricing</p>
                <p>Contact</p>
            </div>
            
        </div>
    )
}

export default NavBar;