import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = ({ setRegister, setLogin }) => {
  const { users, loginWithGoogle } = useAuth();

  console.log(users);

  const handleToggle = () => {
    setRegister(true);
    setLogin(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-3 justify-center w-full">
        <h1 className=" text-2xl text-white text-center">
          <span className=" font-extrabold text-4xl"> Hello Again! </span>
          <br /> Welcome back you've been missed
        </h1>
        <input type="text" placeholder="Email" className="p-2 rounded-md" />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded-md"
        />
        <button className="p-2 bg-blue-600 rounded-md text-white font-extrabold text-xl hover:bg-blue-500">
          Log In
        </button>
        <h1 className=" flex justify-center text-lg text-white font-bold">
          Or
        </h1>

        <div
          className="group flex gap-5 justify-center shadow-2xl p-3 rounded-md bg-white hover:shadow-transparent cursor-pointer"
          onClick={loginWithGoogle}
        >
          <span className="flex items-center group-hover:text-blue-600">
            <FontAwesomeIcon className="my-auto" icon={faGoogle} />
          </span>
          Log In with Google
        </div>
        <div className="group flex gap-5 justify-center shadow-xl p-3 rounded-md bg-white hover:shadow-transparent cursor-pointer">
          <span className="flex items-center">
            <FontAwesomeIcon
              className="my-auto group-hover:text-blue-600"
              icon={faFacebook}
            />
          </span>
          Log In with Facebook
        </div>
        <div>
          Not a member ?{" "}
          <span
            className="cursor-pointer text-blue-600 font-bold hover:text-white"
            onClick={handleToggle}
          >
            {" "}
            Create Account
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
