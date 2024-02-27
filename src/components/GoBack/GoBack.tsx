import { BackArrow, BackArrowProps } from "@/assets/icons/BackArrow";
import React from "react";
import { useNavigate } from "react-router-dom";
interface IGoBack extends BackArrowProps{

}
export const GoBack = (props:IGoBack) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1)
  };
  return <BackArrow onClick={handleGoBack} {...props} />;
};
