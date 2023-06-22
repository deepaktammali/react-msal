import { useMsal } from "@azure/msal-react";

const LoginPage = () => {
  const { instance } = useMsal();

  const login = async () => {
    const response = await instance.loginRedirect();
    console.log({ response });
  };

  return (
    <div className="flex justify-center p-4">
      <button
        onClick={login}
        className="px-2 py-1 bg-blue-200 hover:bg-blue-300"
      >
        Login With Microsoft
      </button>
    </div>
  );
};

export default LoginPage;
