import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { instance } = useMsal();

  const logout = async () => {
    await instance.logout({
      postLogoutRedirectUri: import.meta.env.VITE_MSAL_AUTH_LOGOUT_REDIRECT_URI,
    });
  };

  return (
    <div
      className="flex justify-between px-3 py-2 w-full max-w-2xl items-center border border-blue-200 bg-zinc-50"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23daddec' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <span className="font-semibold text-zinc-950">MSAL-REACT</span>
      <nav className="flex justify-center items-center">
        <ul className="flex gap-3">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => {
                console.log(isActive);
                return isActive ? "text-blue-800" : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <UnauthenticatedTemplate>
            <li>
              <NavLink
                to="/auth/login"
                className={({ isActive }) => {
                  console.log(isActive);
                  return isActive ? "text-blue-800" : "";
                }}
              >
                Login
              </NavLink>
            </li>
          </UnauthenticatedTemplate>
        </ul>
      </nav>
      <div>
        <AuthenticatedTemplate>
          <button
            onClick={logout}
            className="bg-blue-400 px-2 py-1 text-white font-medium"
          >
            Sign out
          </button>
        </AuthenticatedTemplate>
      </div>
    </div>
  );
};

export default Navbar;
