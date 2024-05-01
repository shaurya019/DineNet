import { useEffect, useState } from 'react';
import EmptyRequest from '@/assets/icons/EmptyRequest';
import { AlertType, showAlert } from "@/service/Slice/alertSlice";
import { useDispatch } from "react-redux";

const EmptyRequestPage = () => {

  const LoggedINN = window.localStorage.getItem("firebaseToken");

  const [isFirstRender,setIsFirstRender] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(LoggedINN===null && isFirstRender){
      dispatch(showAlert({
        message: "",
        type: AlertType.login,
      }));
      setIsFirstRender(false);
    }
  },[LoggedINN]);

  return (
    <div className='flex flex-col items-center'>
    <h3  className='text-xl font-semibold mt-[46px] text-center text-blue-pantone'>Keep an eye on your Requests here !</h3>
    <EmptyRequest />
    <h5  className='text-xs font-semibold mt-[26px] text-center text-grey-dark'>Currently, there are no requests at the moment.<br /><span  className='text-sm text-blue-pantone'>Feel free to check back later!</span></h5>
  </div>
  )
}

export default EmptyRequestPage
