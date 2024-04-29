import { Profile } from "@/assets/icons/Profile";
import React from "react";
import Popover from "../Popover";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/service/store/cartStore";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "@/service/Slice/userSlice";
import { useSignOut } from "@/hooks/useSignOut";
import { clearCart } from "@/service/Slice/cartSlice";
import { defaultClientId as clientId, defaultSource as source } from '@/utils/constants';

type UserProfileProps = {
  targetRef: React.RefObject<HTMLElement | SVGSVGElement>;
};

export const UserProfile: React.FC<UserProfileProps> = ({ targetRef }) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutateAsync: signOut } = useSignOut();
  
  const handleLogout = () => {
    signOut().then(() => {
      window.localStorage.removeItem("authToken");
      window.localStorage.removeItem("firebaseToken");
      dispatch(clearCart({ clientId, source }));
      dispatch(signOutUser());
      navigate('/')
    });
  };
  return (
    <Popover targetRef={targetRef}>
      <div className="relative flex flex-col gap-2 items-start border p-4 rounded-lg">
        {/* Arrow
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
          <div className="border bg-white border-gray-300 h-3 w-3 transform rotate-45"></div>
        </div> */}
        <div className="flex flex-row gap-5 mb-2 items-center">
          <div className="bg-green p-2 rounded-full  h-10 w-10 flex items-center justify-center">
            <Profile className="stroke-white fill-green h-5 w-5" />
          </div>
          <div className="flex flex-col gap-1 items-start justify-center">
            {user.name && <h4 className="text-grey font-bold">{user.name}</h4>}
            {user.phone && (
              <p
                className={`text-grey-dark text-${user.name ? "[9px]" : "md"}`}
              >
                +91{user.phone}
              </p>
            )}
          </div>
        </div>
        <button
          className="pb-2 border-b w-full flex items-start"
          onClick={(e) => navigate("/orderHistory")}
        >
          <p className="text-grey-dark text-xs">Order History</p>
        </button>
        <button
          className="pb-2 border-b w-full flex items-start"
          onClick={() => navigate("/requestHistory")}
        >
          <p className="text-grey-dark text-xs">Request History</p>
        </button>
        <button
          onClick={handleLogout}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          LOG OUT
        </button>
      </div>
    </Popover>
  );
};
