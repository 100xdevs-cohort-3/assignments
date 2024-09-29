// register code here
import { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    
    // call the functions onClick of button.
    async function handleRegister() {
        if(!username || !password) {
            toast.error("Please fill all the details..")
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/admin/signup", { username, password}); 
            localStorage.setItem("adminToken", response.data.token)
            toast.success(response.data.message)
            navigate("/admindashboard")
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message || "An error occurred");
            } else {
                toast.error("An unexpected error occurred");
            }
        }
    }
    return (
        <main className='bg-[#030711] h-screen flex items-center justify-center'>
        <div className='max-w-4xl flex flex-col items-center justify-center border border-white bg-gray-600 px-10 py-10 rounded-3xl gap-8 mx-auto'>
            <h1 className='text-3xl font-bold mb-6 text-center'><span className='text-white'>Register To <br /> Coursifiy</span></h1>
            <input
                className='px-5 py-3 rounded-2xl outline-none font-semibold w-full'
                type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input
                className='px-5 py-3 rounded-2xl outline-none font-semibold w-full'
                type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button
                className='bg-blue-700 px-5 py-3 rounded-2xl outline-none font-semibold text-white w-full'
                onClick={handleRegister}>Submit</button>
            <p className='text-white font-semibold'>Already have an Account. <Link className='underline text-blue-600' to={"/admin/login"}>Login</Link></p>
        </div>
    </main>
    )
}

export default Register