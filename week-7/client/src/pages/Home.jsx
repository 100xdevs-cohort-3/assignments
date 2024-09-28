import { Link } from "react-router-dom"

const Home = () => {
  return (
    //  write home page UI code here
    <div>
      <h1>Welcome to Coursifiy</h1>
      <div>
        <Link to={"/adminlogin"}>
          <div>
            <h1>Admin</h1>
          </div>
        </Link>
        {/* will work on this later */}
        <Link to={"/userlogin"}>
          <div>
            <h1>User</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home