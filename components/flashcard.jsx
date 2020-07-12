import React, { useState,useEffect } from "react";
import styles from "./flashcard.module.css";
import managersData from "../public/manager.js";

function FlashCard(props){

    const managers = [managersData[managersData.length-1],...managersData,managersData[0]];

    const [current,setCurrent] = useState(1);
    const [jump,setJump] = useState(false);

    function shiftLeft(){
        setJump(false);
        console.log("shift left");
        setCurrent(prev => (prev+managers.length-1)%managers.length); 
    }

    function shiftRight(){
        setJump(false);
        console.log("shift right");
        setCurrent(prev => (prev+1)%managers.length);  
    }

    useEffect(() => {
        if(current === 4) {
            const id = setTimeout(() => setCurrent(1), 800);
            return () => {
                setJump(true);
                clearTimeout(id);
                }
        } 
        if (current===0){
            const id = setTimeout(() => setCurrent(3), 800);
            return () => {
                setJump(true);
                clearTimeout(id);
                }
        }
      },[current]);

      useEffect(() => {
        const auto = setTimeout(() => shiftRight(), 4000);
        return () => {
            clearTimeout(auto);
        }
      }
      )

    const divStyle = {
        left: (1-current)*100 + "vw",
        transition: jump ? "none":"800ms",
        position:"absolute",
        top:"0",
        width:"100%"
    }

    function renderCard(manager,index){
        const leftPo = 100*(index-1) + "vw";
        const leftDistance = {
            left: leftPo,
        }
        return(
            <div className={`${styles.card}`} 
            style={leftDistance} 
            key={index}>
                 {props.isEn? <h1>{manager.quote}</h1> : <h1 style={{fontFamily:"ChineseTitle",marginTop:"10vw"}}>{manager.quoteCN}</h1> }
                 <div className={styles.name}>
                     <img src={manager.image} onClick={shiftLeft}></img>
                     {props.isEn? <p>{manager.name}</p> :<p>{manager.nameCN}</p>}
                 </div>
             </div>
        )
    }

    return(
        <div className={styles.flashcard}>
            <div onClick={shiftLeft} className={styles.left}>
                <img src="/icons/chevron-left-solid.svg"></img>
            </div>
            <div style={divStyle}> 
                {managers.map(renderCard)}
            </div>
            <div onClick={shiftRight} className={styles.right}> 
                 <img src="/icons/chevron-right-solid.svg"></img>
            </div>
        </div>
    )
}

export default FlashCard;

