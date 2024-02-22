import React, { useState } from "react";
import LoginModal from "../Login";

export const LandingHeader = () => {
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
  return (
    <div className="flex flex-row flex-nowrap gap-2 items-center ">
      {isLoginModalOpen && (
        <LoginModal closeModal={() => setisLoginModalOpen(false)} />
      )}
      <div>
        <img src="/assets/logo.png" />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-grey-dark font-bold">Welcome to Hotel!</h3>
        <p className="text-grey-dark text-xs">
          You have checked in into room no. 06
        </p>
      </div>
      <div className="ml-auto">
        <button
          onClick={() =>
            setisLoginModalOpen((isLoginModalOpen) => !isLoginModalOpen)
          }
          className="bg-green px-2 py-1 rounded text-white shadow-lg"
        >
          Log-in
        </button>
      </div>
    </div>
  );
};
