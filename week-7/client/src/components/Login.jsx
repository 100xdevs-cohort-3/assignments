// login code here
import axios from 'axios';
import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // call the functions onClick of button.
    async function handleLogin() {
        try {
            const resposne = await axios.post("http://localhost:3000/admin/login", {username, password}); 
            alert(resposne.data.message)
            console.log(resposne.data);
            localStorage.setItem("adminToken", resposne.data.token)
        } catch (error) {
            console.log("Error", error);
        }
        
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='UserName' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Submit</button>
        </div>
    )
}

export default Login