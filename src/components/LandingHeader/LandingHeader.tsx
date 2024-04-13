import React, { useEffect, useRef, useState } from "react";
import LoginModal from "../Login";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/service/store/cartStore";
import { fetchUserLoginStatus } from "@/service/Slice/userSlice";
import { Profile } from "@/assets/icons/Profile";
import UserProfile from "../UserProfilePopover";

export interface LandingHeaderProps {
  clientName?: string;
}

export const LandingHeader = ({clientName}:LandingHeaderProps) => {
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const profileRef = useRef<SVGSVGElement>(null);
  const sourceId = localStorage.getItem("sourceId");
  
  const handleCloseOtpModal = () => {
    setisLoginModalOpen(false)
      window.location.reload();
  }


  useEffect(() => {
    dispatch(fetchUserLoginStatus());
  }, []);


  return (
    <div className="flex flex-row flex-nowrap gap-2 items-center ">
      {isLoginModalOpen && (
        <LoginModal closeModal={() => handleCloseOtpModal()} />
      )}
      <div>
        <img src="/assets/logo.png" />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-grey-dark font-bold">Welcome to the {clientName}!</h3>
        <p className="text-grey-dark text-xs">
          You have checked in into room no. {sourceId}
        </p>
      </div>
      <div className="ml-auto">
        {user.loggedIn ? (
          <div className="h-8 w-8 rounded-full bg-green flex items-center justify-center">
            <Profile
              className="stroke-white h-4 w-4 fill-green"
              ref={profileRef}
            />
            <UserProfile targetRef={profileRef} />
          </div>
        ) : (
          <button
            onClick={() =>
              setisLoginModalOpen((isLoginModalOpen) => !isLoginModalOpen)
            }
            className="bg-green px-2 py-1 rounded text-white shadow-lg"
          >
            Log-in
          </button>
        )}
      </div>
    </div>
  );
};
