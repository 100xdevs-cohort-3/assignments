export function SidebarClass1() {
    return <div className="flex">
       
        {/* <div className="transition-all delay-1000 md:translate-x-0 -translate-x-96 h-screen w-0 md:w-96"> */}
        <div className=" transition-all ease-in-out  duration-150 md:w-96 w-0 h-screen">
            Sidebar
        </div>
        <div className="bg-green-800  h-screen flex-1">
            Content
        </div>
    </div>
}