// register code here
import { useState } from 'react'
import axios from "axios"


const Register = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    // call the functions onClick of button.
    async function handleRegister() {
        try {
            const resposne = await axios.post("http://localhost:3000/admin/signup", { userName, password}); 
            alert(resposne.data.message)
        } catch (error) {
            console.log("Error", error);
        }
    }

    return (
        <div>
            <h1>Register Here</h1>
            <input type="text" placeholder='UserName' onChange={(e) => setUserName(e.target.value) } />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value) } />
            <button onClick={handleRegister}>Submit</button>
        </div>
    )
}

export default Register