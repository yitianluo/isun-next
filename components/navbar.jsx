import React, { useState } from "react";
import styles from "./navbar.module.css";

function NavBar(props){

    const[isSpan,SetIsSpan] = useState(false);

    function handleMenu(){
        SetIsSpan(prev => !prev);
    }

    return(
        <div className={styles.navbar}>
            <div className={styles.logoDiv} >
                <img src="/logo.png" />
                <h1 style={props.isEn ? {fontStyle: "italic"}:{fontStyle: "normal"}}>{props.isEn? "ISUN":"安徽以恒"}</h1>
            </div>

            <div className={styles.lanChoice}>
                <div className={styles.language} onClick={props.chooseCh} style={props.isEn?{backgroundColor:"white",color:"black"}:{}}>
                    中文
                </div>
                <div className={styles.language} onClick={props.chooseEn} style={props.isEn?{}:{backgroundColor:"white",color:"black"}} >
                    En
                </div>
            </div>

            <div className={styles.mobileMenu}>
                <svg onClick={handleMenu} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="var(--Main-Green)" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                { isSpan && <div className={styles.spanMenu}>
                    <p onClick={handleMenu}> <a href="#introduction">{props.isEn?"Introduction":"公司概况"}</a> </p>
                    <p onClick={handleMenu}> <a href="#products">{props.isEn?"Products":"产品列表"}</a> </p>
                    <p onClick={handleMenu}> <a href="#contact">{props.isEn?"Contact":"联系我们"}</a> </p>
                </div> }
            </div>

            <div className={styles.menuDiv}>
            {/* <a href="geo:124.028582,-29.201930" target="_blank">Click here for map</a> */}
                <p> <a href="#introduction">{props.isEn?"Introduction":"公司概况"}</a> </p>
                <p> <a href="#products">{props.isEn?"Products":"产品列表"}</a> </p>
                <p> <a href="#contact">{props.isEn?"Contact":"联系我们"}</a> </p>
            </div>
        </div>
    )
}

export default NavBar;