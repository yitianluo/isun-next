import React from "react";
import styles from "./mymap.module.css";
import ReactDOM from "react-dom";
import {Map,Marker} from "react-amap";


function MyMap(props){

    var pos = { longitude: 117.270705 , latitude: 31.86183 };
    function mapSelector(){
        console.log("choose map");
        if /* if we're on iOS, open in Apple Maps */
        ((navigator.platform.indexOf("iPhone") != -1) || 
        (navigator.platform.indexOf("iPad") != -1) || 
        (navigator.platform.indexOf("iPod") != -1))
        window.open("maps://maps.google.com/maps?daddr=31.86183,117.270705&amp;ll=");
        else{
            window.open("https://maps.google.com/maps?daddr=31.86183,117.270705&amp;ll=");
        }
    }
    return(
        <div className={styles.mymap} onClick={mapSelector}>
            <div className={styles.mapDiv} id="map">
                <Map center={pos} zoom="100">
                    <Marker center={pos}></Marker>
                </Map>
                 
            </div>
            <div className={styles.infoDiv}>
                <div className={styles.info}>
                    <img src="/icons/location-solid.svg"></img>
                    {props.isEn?<p>Zhonghuan Huijing Mansion, NO.279 Anqing Road, Hefei, Anhui, China</p>:<p>安徽省合肥市安庆路279号中环汇景大厦</p>}
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