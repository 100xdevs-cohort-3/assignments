// register code here
import React from 'react'
import axios from "axios"


const Register = () => {
    // call the functions onClick of button.
    async function handleRegister() {
        const resposne = await axios.post(); // if you don't know about axios, give it a read https://axios-http.com/docs/intro
    }
    return (
        <div>Register</div>
    )
}

export default Register