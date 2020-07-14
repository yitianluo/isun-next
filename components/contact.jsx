import React, { useState } from "react";
import styles from "./contact.module.css";
import MyMap from "./mymap";
import axios from "axios";

function Contact(props){

    const [userMessage,setUserMessage] = useState({});

    function handleChange(e){
        setUserMessage({...userMessage,[e.target.name]:e.target.value});
    };

    function submitForm(e){
        
        document.getElementById("form").reset();
        const date = new Date();

        const data = {name : userMessage.name,
            title:userMessage.title,
            email:userMessage.email,
            mobile : userMessage.mobile,
            company : userMessage.company,
            address : userMessage.address,
            message : userMessage.message,
            date : date
        };

        axios.post("http://localhost:4000/",data).then(function(response){
            console.log(response);
        }).catch(function(error){
            console.log("error");
        })

        setUserMessage({});
        e.preventDefault();

        props.isEn? alert("Thanks for your comment,we'll contact you soon."):alert("谢谢你的来信，我们将尽快与您联系");
    }


    return(
        <div id="contact" className={styles.contact}>
            <div className={styles.formDiv}>
            <form id="form">
                {props.isEn? <h1>Feed Back</h1> : <h1>联系我们</h1>}

                <div className={styles.half}>
                {props.isEn? <label>Name</label> :<label>姓名</label>}
                    <input name="name" onChange={handleChange}></input>
                </div>
                <div className={styles.half}>
                {props.isEn? <label>Title</label> : <label>职位</label>}
                    <input name="title" onChange={handleChange}></input>
                </div>
                <div className={styles.half}>
                    <label>Email</label>
                    <input type="email" placeholder="name@example.com" name="email" onChange={handleChange}></input>
                </div>
                <div className={styles.half}>
                {props.isEn?<label>Mobile Number</label>:<label>电话</label>}
                    <input name="mobile" onChange={handleChange}></input>
                </div>
                
                <div className={styles.full}>
                {props.isEn?<label>Company</label>:<label>公司</label>}
                    <input name="company" onChange={handleChange}></input>
                </div>
                <div className={styles.full}>
                {props.isEn?<label>Address</label>:<label>联系地址</label>}
                    <input name="address" onChange={handleChange}></input>
                </div>
                <div className={styles.full}>
                {props.isEn?<label>Message</label>:<label>留言</label>}
                    <textarea rows="5" name="message" onChange={handleChange}></textarea>
                </div>
                <button type="submit" onClick={submitForm}>{props.isEn?"Submit":"提交"}</button>
            </form>
            </div>

            <MyMap isEn={props.isEn} />
        </div>
    )
}

export default Contact;