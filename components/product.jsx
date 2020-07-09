import React,{useState} from "react";
import styles from "./product.module.css"

function Product(props){

    const [isHover,setIsHover] = useState(false);

    function handleHover(){
        setIsHover(prev => !prev);
    }

    return(
        <div className={styles.product} onMouseOver={handleHover} onMouseOut={handleHover}>
            <img src={props.image}></img>
            <div className={styles.mask} 
                style={ {visibility : isHover? "visible":"hidden"} }>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default Product;