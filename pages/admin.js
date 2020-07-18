import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../components/admin.module.css";

const bodyParser = require('body-parser');

function Admin(){   

    const [isLog,setIsLog] = useState(false);
    const [messages,setMessages] = useState([]); 
    const [pass,setPass] = useState("");
    const [name,setName] = useState("");

    function handleName(e){
        const name = e.target.value;
        setName(name);
    }

    function handlePass(e){
        const pass = e.target.value;
        setPass(pass);
    }

    function handleLog(){
        if(name==="admin" && pass==="admin"){
            setIsLog(true);
        } else {
            alert("Wrong username&password combination");
            setPass("");
            setName("");
        }
    }

    useEffect (() => {
        console.log("log changed");
        if(isLog===true){
            axios.get("/api/messages").then(function(response){
                setMessages(response.data);
            }).catch(function(error){
                console.log("error");
            })
        }
    },[isLog]);

    function showMessage(message,index){
        
        return(
        <div key={index} className={styles.message}>
            <div className={styles.block}>
                <label>Name</label>
                <h1>{message.name}</h1>
            </div>
            <div className={styles.block}>
                <label>Title</label>
                <p>{message.title}</p>
            </div>
            <div className={styles.block}>
                <label>Email</label>
                <p>{message.email}</p>
            </div>
            <div className={styles.block}>
                <label>Mobile</label>
                <p>{message.mobile}</p>
            </div>
            <div className={styles.block}>
                <label>Company</label>
                <p>{message.company}</p>
            </div>
            <div className={styles.block}>
                <label>Address</label>
                <p>{message.address}</p> 
            </div>
            <div className={styles.text}>
                <label>Message</label>          
                <p>{message.message}</p>     
            </div>             
        </div>)
    }

    return(
        isLog ? 
        <div className={styles.messages}>
            <h1>Here're the messages.</h1>
            {messages.map(showMessage)}
        </div> : 
        <div className={styles.login}>
        <div className={styles.row}>
            <label>Username</label>
            <input onChange={handleName} value={name} ></input>
        </div>
        <div className={styles.row}>
            <label>Password</label>
            <input onChange={handlePass} value={pass} ></input>
        </div>
            <button onClick={handleLog}>SUBMIT</button>
        </div> 
    )
}

export default Admin;