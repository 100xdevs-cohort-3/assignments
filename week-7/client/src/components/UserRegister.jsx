// register code here
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    // call the functions onClick of button.
    async function handleRegister() {
        try {
            const resposne = await axios.post("http://localhost:3000/users/signup", { username, password}); 
            alert(resposne.data.message)
            console.log(resposne.data);
            navigate("/userlogin")
        } catch (error) {
            console.log("Error", error);
        }
    }

    return (
        <div>
            <h1>Register Here</h1>
            <input type="text" placeholder='UserName' value={username} onChange={(e) => setUsername(e.target.value) } />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value) } />
            <button onClick={handleRegister}>Submit</button>
        </div>
    )
}

export default Register