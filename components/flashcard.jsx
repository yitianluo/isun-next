import React, { useState } from "react";
import styles from "./flashcard.module.css";
import managersData from "../public/manager.js";

function FlashCard(){

    const managers = [managersData[managersData.length-1],...managersData,managersData[0]];
    console.log(managers);

    const [current,setCurrent] = useState(1);

    const leftDiv = (current-1)*(-100) + "vw";

    console.log("leftDiv is" + leftDiv);
    const style = {
        position:"absolute",
        top:"0",
        left:leftDiv,
        width:"100%",
        transition: "all 1s ease-in-out"
    }

    console.log(style);

    function shiftLeft(){
        console.log("shift left");
        setCurrent(prev => (prev+managers.length-1)%managers.length);  
    }

    function shiftRight(){
        console.log("shift right");
        setCurrent(prev => (prev+1)%managers.length);  
    }

    function renderCard(manager,index){
        console.log(index);

        const leftPo = 100*(index-1) + "vw";
        console.log("leftpo is "+ leftPo);
        const leftDistance = {
            left: leftPo
        }

        return(
            <div className={`${styles.card}`} 
            style={leftDistance}>
                 <h1>{manager.quote}</h1>
                 <div className={styles.name}>
                     <img src={manager.image} onClick={shiftLeft}></img>
                     <p>{manager.name}</p>
                 </div>
             </div>
        )
    }

    return(
        <div className={styles.flashcard}>
            <div onClick={shiftLeft} className={styles.left}> left </div>
            <div style={style}> 
                {managers.map(renderCard)}
            </div>
            <div onClick={shiftRight} className={styles.right}> right </div>
        </div>

        // Hard Type Version

        // <div className={styles.flashcard}>

        //     <div onClick={shiftLeft} className={styles.left}> left </div> 

        //     <div className={`${styles.card}`} style={{transform: current===1? "translate(-100vw,0)": "none",transition: "all 2s ease-in-out"}}>
        //         <h1>Our key values are Credit, Professional, Efficiency and Forever Keeping</h1>
        //         <div className={styles.name}>
        //             <img src="/liang.jpg"></img>
        //             <p>Luo Liang, CEO</p>
        //         </div>
        //     </div>

        //     <div className={`${styles.card} ${styles.card2}`}style={{transform: current===1? "translate(-100vw,0)": "none",transition: "all 2s ease-in-out"}}>
                
        //         <h1>Our goal is to be leading in the line and developing world-famous brand</h1>
        //         <div className={styles.name}>
        //             <img src="/jean.jpg"></img>
        //             <p>Jean, Overseas Manager</p>
        //         </div>
                
        //     </div>
        // </div>
    )
}

export default FlashCard;

