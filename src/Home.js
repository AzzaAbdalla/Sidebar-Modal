import React from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";
import { useContext } from "react";

const Home = () => {
  const { openModal, openSidebar } = useContext(AppContext);
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
