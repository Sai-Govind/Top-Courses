import React, { useState } from "react";
import NavBar from './Components/Navbar';
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
const App = () => {
  const [filter,handlefilter]=useState("All");
  return   (
    <>
    <div className="bg-bgDark2 w-[100] min-h-[100vh] h-[100%]">
    <NavBar/>
    <Filter filter={filter} handlefilter={handlefilter} />
    <Cards filter={filter}/>
    </div>

    </>
  );
};

export default App;
