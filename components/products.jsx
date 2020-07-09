import React, { useState } from "react";
import styles from "./products.module.css";
import categories from "../public/category";
import Product from "./product";


function Products(){

    function renderProduct(category,index){
        return(
            <Product key={index} name={category.name} image={category.image}/>
        )
    }

    return(
        <div className={styles.products}>
            <h1>Our Products</h1>
            {categories.map(renderProduct)}
        </div>
    )
}

export default Products;