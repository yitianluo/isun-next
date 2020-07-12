import React, { useState } from "react";
import styles from "./products.module.css";
import categories from "../public/category";
import Product from "./product";


function Products(props){

    function renderProduct(category,index){
        return(
            <Product key={index} name={category.name} nameCN={category.nameCN} image={category.image} isEn={props.isEn} />
        )
    }

    return(
        <div className={styles.products} id="products">
            {props.isEn? <h1>Our Products</h1> : <h1>我们的产品</h1>}
            {categories.map(renderProduct)}
        </div>
    )
}

export default Products;