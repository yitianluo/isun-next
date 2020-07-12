import React from "react";
import styles from "./landing.module.css";

function Landing(props){
    return(
        <div className={styles.landing}>
            <img src="/landing-page.png"></img>
            <div className={styles.landingLeft}></div>
            <div className={styles.landingRight}>
                <div className={styles.text}>
                    <h1 style={props.isEn ? {} :{fontFamily:"ChineseTitle"}}>{props.isEn? "Best Paper Cups" : "世界一流纸杯"}</h1>
                    <h2>{props.isEn? "Luxury & Economy" : "高端型 & 经济型"}</h2>
                    <p>{props.isEn? "This is a place to find best luxury and economic paper cups made in China -- Anhui Isun Technology and International Trading.":"来这里，邂逅中国制造的高级纸杯 -- 安徽以恒科技环保有限公司"}</p>
                </div>
            </div>
        </div>
    )
}

export default Landing;