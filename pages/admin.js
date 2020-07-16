import React from "react";
import axios from "axios";
const bodyParser = require('body-parser');

function Admin({messages}){   

    function showMessage(message,index){

        console.log(message);
        
        return(
        <div key={index}>
            <h1>{message.name}</h1>
            <p>{message.title}</p>
            <p>{message.email}</p>
            <p>{message.mobile}</p>
            <p>{message.company}</p>
            <p>{message.address}</p>                
            <p>{message.message}</p>                
        </div>)
    }
    return(
        <div>
            <h1>Here's the data from database.</h1>
            {messages.map(showMessage)}
        </div>
    )
}

export async function getStaticProps(){

    const messages = await axios.get("https://isun-next.vercel.app/api/messages").then(function(response){
        
        return response.data;
    }).catch(function(error){
        return error;
    });

    console.log(messages);

    return {
        props:{
            messages
        }
    }
    
}

export default Admin;