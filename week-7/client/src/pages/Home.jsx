import { Link } from "react-router-dom"

const Home = () => {
  return (
    //  write home page UI code here
    <div className="bg-[#030711] h-screen overflow-hidden">
      <h1 className="text-4xl text-center font-bold mt-24 text-white"><span className="text-[#6028ff]">Welcome to Coursifiy</span></h1>
      <div className="mt-10">
      <h2 className="text-white text-center text-3xl py-10">Who are You ?</h2>
      <div className="flex items-center justify-center gap-16 max-w-5xl mx-auto">
        <Link to={"/admin/login"} className="border px-20 py-10 rounded-2xl hover:scale-105 transition">
          <div>
          <img src="admin1.webp" alt="User_Image" className="w-32 h-32 rounded-full" />
          </div>
          <h1 className="text-center text-white text-3xl mt-5">Admin</h1>
        </Link>
        {/* will work on this later */}
        <Link to={"/user/login"} className="border px-20 py-10 rounded-2xl hover:scale-105 transition">
          <div>
            <img src="user1.avif" alt="User_Image" className="w-32 h-32 rounded-full" />
          </div>
          <h1 className="text-center text-white hover:transform transition-all text-3xl mt-5">User</h1>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Home