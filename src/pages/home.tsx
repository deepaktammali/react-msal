import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const HomePage = () => {
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal();
  const account = accounts[0];

  return (
    <div className="font-extrabold text-4xl text-blue-700 flex justify-center p-4">
      {isAuthenticated ? (
        <>Hello, {account?.name}</>
      ) : (
        "You aren't authenticated"
      )}
    </div>
  );
};

export default HomePage;
