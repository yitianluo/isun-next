import React from "react";
import styles from "./contact.module.css";
import MyMap from "./mymap";

function Contact(){
    return(
        <div className={styles.contact}>
            <div className={styles.formDiv}>
            <form>
                <h1>Feed Back</h1>

                <div className={styles.half}>
                    <label>Name</label>
                    <input></input>
                </div>
                <div className={styles.half}>
                    <label>Title</label>
                    <input></input>
                </div>
                <div className={styles.half}>
                    <label>Email</label>
                    <input type="email" placeholder="name@example.com"></input>
                </div>
                <div className={styles.half}>
                    <label>Mobile Number</label>
                    <input></input>
                </div>
                
                <div className={styles.full}>
                    <label>Company</label>
                    <input></input>
                </div>
                <div className={styles.full}>
                    <label>Address</label>
                    <input></input>
                </div>
                <div className={styles.full}>
                    <label>Message</label>
                    <textarea rows="5"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>

            <MyMap />
        </div>
    )
}

export default Contact;