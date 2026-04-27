//import { useState } from 'react'
import "./App.css";
import SidebarNav from "./components/sidebarNav";
import Header from "./components/Header";
import DropdownWithButton from "./components/DropdownWithButton";
import CourseTable from "./components/Table";

function App() {
  return (
    <div>
      <div className="grid grid-cols-[2fr_5fr_2fr] grid-rows-[100px_100px_500px] gap-x-10">
        <div className="justify-self-start">
          <SidebarNav />
        </div>
        <div className="row-start-2 row-end-2 col-span-full justify-self-center">
          <Header />
        </div>
        <div className="row-start-3 row-end-3 col-start-2 col-end-2 justify-self-center">
          <CourseTable />
        </div>
        <div className="row-start-3 row-end-3 col-start-3 col-end-3 justify-self-left">
          <DropdownWithButton />
        </div>
      </div>
    </div>
  );
}

export default App;
