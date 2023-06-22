import { InteractionStatus } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { useMemo } from "react";
import { RotatingLines } from "react-loader-spinner";

const MsalProgress = () => {
  const { inProgress } = useMsal();

  const message = useMemo(() => {
    switch (inProgress) {
      case InteractionStatus.Startup: {
        return "Setting things up";
      }
      case InteractionStatus.Login: {
        return "Logging you in";
      }
      case InteractionStatus.Logout: {
        return "logging you out";
      }
      default: {
        return "loading";
      }
    }
  }, []);

  return (
    <main className="flex flex-col justify-between items-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      <span>{message}</span>
    </main>
  );
};

export default MsalProgress;
