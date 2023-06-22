import { useMsal } from "@azure/msal-react";
import { Outlet } from "react-router-dom";
import MsalProgress from "./components/MsalProgress";
import { useEffect } from "react";

function App() {
  const { inProgress, instance } = useMsal();

  useEffect(() => {
    const callbackId = instance.addEventCallback((message: any) => {
      console.log(message);
    });

    return () => {
      if (callbackId) {
        instance.removeEventCallback(callbackId);
      }
    };
  }, []);

  if (inProgress !== "none") {
    return <MsalProgress />;
  }

  return <Outlet />;
}

export default App;
