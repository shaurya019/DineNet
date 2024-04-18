import React,{useState,} from 'react'
import CustomAlert from '../CustomAlert';
import { clearCart } from "@/service/Slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import GoBack from '../GoBack';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
    title: string;
    show: string;
    showEmpty: string;
  }
export const Navbar : React.FC<NavbarProps> = ({title,show,showEmpty}) => {
  const clientId = window.localStorage.getItem("clientId") || "1"; 
  const source = window.localStorage.getItem("source") || "1";
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenAlert = () => {
      setIsOpen(true);
    };
  
    const handleCloseAlert = () => {
      setIsOpen(false);
    };
  
    const clearCartFunction = () => {
      dispatch(clearCart({ clientId, source }));
    }

  
    const handleGoBack = () => {
      if(title === 'Home'){
        navigate(`/?clientId=${clientId}`, { replace: true });
      }else{
        navigate(-1);
      }
    };

    return (
      <div className={`h-11 px-3.5 flex justify-between items-center ${show === "True" ? 'bg-greenCyan text-white' : 'bg-white'}`}>
        <div onClick={handleGoBack} className="flex items-center cursor-pointer">
          <button className="text-custom-empty-title">
          {show === "True" ? <GoBack fillColor="white" /> : <GoBack fillColor='#4C4D4F' /> }
            </button>
          <h4 className={`ml-2.5 font-semibold text-base ${show === "True" ? 'text-white' : 'text-grey'}`}>{title}</h4>
        </div>
        <div>
        {showEmpty === "True" && (<button onClick={handleOpenAlert}> <h4 className="font-semibold text-sm">Empty Cart</h4></button>)}
       
        <CustomAlert isOpen={isOpen} message="Are you sure you want to empty your cart ?" onClose={handleCloseAlert}  clearCart={clearCartFunction} />
        </div>
      </div>
    );
  }