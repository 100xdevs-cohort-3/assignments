// login code here
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errormessage, setErrormessage] = useState("")

    // call the functions onClick of button.
    const handleLogin = async () => {
        if(!username || !password) {
            setErrormessage("Please fill all the fields..")
        }
        try {
            const resposne = await axios.post("http://localhost:3000/users/login", { username, password });
            localStorage.setItem("userToken", resposne.data.token)
            console.log(resposne.data.message);
            navigate("/userdashboard")
        } catch (error) {
            console.log("Error", error);
        }
    }
    return (
        // <div>
        //     <h1>Login</h1>
        //         <input type="text" placeholder='UserName' value={username} onChange={(e) => setUsername(e.target.value)} />
        //         <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        //         <button onClick={handleLogin}>Login</button>
        //         <div>
        //             <p>Didn&apos;t Have an account</p>
        //             <Link to={"/usersignup"}>
        //             <p>Click to SignUp</p>
        //             </Link>
        //         </div>
        // </div>
        <main className='bg-[#030711] h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center border border-white bg-gray-600 px-10 py-10 rounded-3xl gap-8 mx-auto'>
            <h1 className='text-3xl font-bold mb-6'><span className='text-white'>Login To Coursifiy</span></h1>
            <input
                className='px-5 py-3 rounded-2xl outline-none font-semibold w-full'
                type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input
                className='px-5 py-3 rounded-2xl outline-none font-semibold w-full'
                type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                {errormessage && <p className='text-red-600'>{errormessage}</p>}
            <button
                className='bg-blue-700 px-5 py-3 rounded-2xl outline-none font-semibold text-white w-full'
                onClick={handleLogin}>Submit</button>
            <p className='text-white font-semibold'>Didn&apos;t have an Account ? <Link className='text-blue-600 underline' to={"/user/signup"}>SignUp</Link></p>
        </div>
    </main>
    )
}

export default Login