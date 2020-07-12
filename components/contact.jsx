import React from "react";
import styles from "./contact.module.css";
import MyMap from "./mymap";

function Contact(props){
    return(
        <div id="contact" className={styles.contact}>
            <div className={styles.formDiv}>
            <form>
                {props.isEn? <h1>Feed Back</h1> : <h1>联系我们</h1>}

                <div className={styles.half}>
                {props.isEn? <label>Name</label> :<label>姓名</label>}
                    <input></input>
                </div>
                <div className={styles.half}>
                {props.isEn? <label>Title</label> : <label>职位</label>}
                    <input></input>
                </div>
                <div className={styles.half}>
                    <label>Email</label>
                    <input type="email" placeholder="name@example.com"></input>
                </div>
                <div className={styles.half}>
                {props.isEn?<label>Mobile Number</label>:<label>电话</label>}
                    <input></input>
                </div>
                
                <div className={styles.full}>
                {props.isEn?<label>Company</label>:<label>公司</label>}
                    <input></input>
                </div>
                <div className={styles.full}>
                {props.isEn?<label>Address</label>:<label>联系地址</label>}
                    <input></input>
                </div>
                <div className={styles.full}>
                {props.isEn?<label>Message</label>:<label>留言</label>}
                    <textarea rows="5"></textarea>
                </div>
                <button type="submit">{props.isEn?"Submit":"提交"}</button>
            </form>
            </div>

            <MyMap isEn={props.isEn} />
        </div>
    )
}

export default Contact;