import { useState } from "react";

export const Sidebar4 = () => {
    const [open, setOpen] = useState(true);

    const listItems = [
        { title: "Home", icon: HomeIcon },
        { title: "About", icon: HomeIcon },
        { title: "Services", icon: HomeIcon },
        { title: "Contact", icon: HomeIcon },
    ];

    return (
        <div>
            <div className="flex">
                {/* Sidebar */}
                <div className={`${open ? "w-72" : "w-16"} h-screen transition-all duration-300`}>
                    <div className={`h-full bg-gray-50 ${open ? "p-4" : "p-2"}`}>
                        {/* Toggle Button */}
                        <button
                            onClick={() => setOpen((prev) => !prev)}
                            className="bg-gray-300 p-2 rounded">
                            {open ? "Close" : "Open"}
                        </button>

                        {/* Header */}
                        {open && (
                            <div className="flex items-start justify-between my-4">
                                <div className="bg-blue-500 rounded-md p-2 text-sm flex">
                                    <div className="text-white">Webinar</div>
                                    <div className="text-green-400">.gg</div>
                                </div>
                                <div>
                                    <img src={"/logo.png"} alt="Logo" className="w-10 h-10 rounded" />
                                </div>
                            </div>
                        )}

                        {/* List Items */}
                        <div>
                            {listItems.map((item, index) => (
                                <ListItem
                                    key={index}
                                    size={open ? "lg" : "sm"}
                                    title={item.title}
                                    icon={<item.icon />}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-2 flex-1">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        Hi there
                    </div>
                </div>
            </div>
        </div>
    );
};

function ListItem({ title, icon, size }) {
    return size === "sm" ? (
        <div className="hover:bg-slate-200 flex justify-between cursor-pointer rounded-xl text-blue-500 p-2 my-4">
            {icon}
        </div>
    ) : (
        <div className="hover:bg-slate-200 flex justify-between p-4 m-4 cursor-pointer rounded-xl text-blue-500">
            <div>{title}</div>
            <div>{icon}</div>
        </div>
    );
}

function HomeIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
        </svg>
    );
}
