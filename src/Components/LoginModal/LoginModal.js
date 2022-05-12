import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Register from "../Register/Register";
import Login from "../Login/Login";
// import { FontAwesomeIcon } from "@fortawesome/";

const LoginModal = ({ setShowModal }) => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div>
      <div className="justify-center items-end sm:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative my-6 mx-auto sm:w-96 w-11/12">
          <div className="flex justify-end">
            <span
              className="cursor-pointer p-2 h-7 bg-red-600 text-white -mb-22 z-50 rounded-full"
              onClick={() => setShowModal(false)}
            >
              <FontAwesomeIcon icon={faXmark} className="flex items-center" />
            </span>
          </div>
          {/*content*/}

          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full backdrop-blur-xl bg-black/30 outline-none focus:outline-none overflow-hidden p-5">
            {/*body*/}
            {/* {register ? <Register /> : <Login setRegister={setRegister} />} */}
            {register && (
              <Register setLogin={setLogin} setRegister={setRegister} />
            )}
            {login && <Login setRegister={setRegister} setLogin={setLogin} />}
            {!register && !login && <Login setRegister={setRegister} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
