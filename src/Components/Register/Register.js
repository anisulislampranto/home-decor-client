import React from "react";

const Register = ({ setLogin, setRegister }) => {
  const handleToggle = () => {
    setLogin(true);
    setRegister(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className=" text-3xl font-bold text-white">Create New Account</h1>
      <input
        type="text"
        placeholder="Enter Full Name"
        className="p-3 w-full rounded-md"
      />
      <input
        type="text"
        placeholder="Email"
        className="p-3 w-full rounded-md"
      />
      <input
        type="password"
        placeholder="Set Password"
        className="p-3 w-full rounded-md"
      />
      <button className="p-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-500">
        Register
      </button>

      <div className="flex gap-2">
        Already have an account ? <br />
        <span onClick={handleToggle}>Log In</span>
      </div>
    </div>
  );
};

export default Register;
