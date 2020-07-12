import React from "react";
import styles from "./mymap.module.css";
import ReactDOM from "react-dom";
import {Map,Marker} from "react-amap";


function MyMap(props){

    var pos = { longitude: 117.270705 , latitude: 31.86183 };

    return(
        <div className={styles.mymap}>
            <div className={styles.mapDiv} id="map">
                <Map center={pos} zoom="100">
                    <Marker center={pos}></Marker>
                </Map>
                 
            </div>
            <div className={styles.infoDiv}>
                <div className={styles.info}>
                    <img src="/icons/location-solid.svg"></img>
                    {props.isEn?<p>NO.279 Anqing Road, Hefei, Anhui, China</p>:<p>安徽省合肥市安庆路279号中环汇景大厦</p>}
                </div>
                <div className={styles.info}>
                    <img src="/icons/phone-solid.svg"></img>
                    <p>86-551-62816938, 62839938, 15605600111</p>
                </div>
                <div className={styles.info}>
                    <img src="/icons/globe-solid.svg"></img>
                    <p>www.anhuibest.com</p>
                </div>
                <div className={styles.info}>
                    <img src="/icons/envelope-regular.svg"></img>
                    <p>Business@anhuibest.com, 305997363@qq.com</p>
                </div>
            </div>
        </div>
    )
}

export default MyMap;