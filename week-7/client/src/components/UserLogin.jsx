// login code here
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // call the functions onClick of button.
    const handleLogin = async () => {
        try {
            const resposne = await axios.post("http://localhost:3000/users/login", { username, password });
            localStorage.setItem("adminToken", resposne.data.token)
            console.log(resposne.data.message);
            navigate("/userdashboard")
        } catch (error) {
            console.log("Error", error);
        }
    }
    return (
        <div>
            <h1>Login</h1>
                <input type="text" placeholder='UserName' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
                <div>
                    <p>Didn&apos;t Have an account</p>
                    <Link to={"/usersignup"}>
                    <p>Click to SignUp</p>
                    </Link>
                </div>
        </div>
    )
}

export default Login