import { useMsal } from "@azure/msal-react";
import { Outlet } from "react-router-dom";
import MsalProgress from "./components/MsalProgress";

function App() {
  const { inProgress, } = useMsal();

  if (inProgress !== "none") {
    return <MsalProgress />;
  }

  return <Outlet />;
}

export default App;
