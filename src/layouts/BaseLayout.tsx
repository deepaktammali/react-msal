import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const BaseLayout = () => {
  return (
    <div className="flex flex-col">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
