// login code here
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // call the functions onClick of button.
    const handleLogin = async () => {

        if(!username || !password) {
            toast.error("Please fill all the details..")
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/admin/login", { username, password });
            localStorage.setItem("adminToken", response.data.token)
            toast.success(response.data.message)
            navigate("/admindashboard")
        } catch (error) {
            console.log("While logging", error);
            if (error.response && error.response.status === 404) {
                toast.error(error.response.data.message || "An error occurred");
            } else {
                toast.error(error.response.data.message);
            }
        }
    }
    return (
        <main className='bg-[#030711] h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center border border-white bg-gray-600 px-10 py-10 rounded-3xl gap-8 mx-auto'>
                <h1 className='text-3xl font-bold mb-6'><span className='text-white'>Login To Coursifiy</span></h1>
                <input
                    className='px-5 py-3 rounded-2xl outline-none font-semibold w-full'
                    type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input
                    className='px-5 py-3 rounded-2xl outline-none font-semibold w-full'
                    type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button
                    className='bg-blue-700 px-5 py-3 rounded-2xl outline-none font-semibold text-white w-full'
                    onClick={handleLogin}>Submit</button>
                <p className='text-white font-semibold'>Didn&apos;t have an Account ? <Link className='text-blue-600 underline' to={"/admin/signup"}>SignUp</Link></p>
            </div>
        </main>

    )
}

export default Login