import LeetcodeSVG from "../assets/leetcode.svg"

const Navbar = () => {
  return (
    <nav className=" bg-secondaryColor w-full h-10 flex sm:hidden fixed md:static top-0 left-0 z-10 " >
        <img src={LeetcodeSVG} alt="" className="p-2 ml-2" />
    </nav>
  )
}

export default Navbar