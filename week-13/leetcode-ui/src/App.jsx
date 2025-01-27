import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ContentCard from "./components/ContentCard";
import Table from "./components/Table";

const App = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(true);

  return (
    <div className="flex bg-black text-white min-h-screen">
      <div
        className={`${
          sidebarVisibility && "w-screen lg:w-[20%] bg-gray-500"
        }  h-screen fixed md:static`}
      >
        <Sidebar
          isVisible={sidebarVisibility}
          setIsVisible={setSidebarVisibility}
        />
      </div>
      <div className="p-2 *:rounded-md w-full flex flex-col md:flex-row gap-5">
        <ContentCard />
        <Table />
      </div>
    </div>
  );
};

export default App;
