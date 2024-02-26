import React,{useState,} from 'react'
import CustomAlert from '../CustomAlert';
import { clearCart } from "@/service/Slice/cartSlice";
import { BackButton } from '../../assets/icons/BackButton';
import { useSelector, useDispatch } from "react-redux";

interface NavbarProps {
    title: string;
    show: string;
    showEmpty: string;
  }
export const Navbar : React.FC<NavbarProps> = ({title,show,showEmpty}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpenAlert = () => {
      setIsOpen(true);
    };
  
    const handleCloseAlert = () => {
      setIsOpen(false);
    };
  
    const clearCartFunction = () => {
      dispatch(clearCart());
    }

    return (
      <div className={`h-11 px-3.5 flex justify-between items-center ${show === "True" ? 'bg-greenCyan text-white' : 'bg-white'}`}>
        <div className="flex items-center">
          <button className="text-custom-empty-title">
          {show === "True" ? <BackButton fillColor="white" /> : <BackButton fillColor='#4C4D4F' /> }
            </button>
          <h4 className={`ml-2.5 font-semibold text-base ${show === "True" ? 'text-white' : 'text-grey'}`}>{title}</h4>
        </div>
        <div>
        {showEmpty === "True" && (<button onClick={handleOpenAlert}> <h4 className="font-semibold text-sm">Empty Cart</h4></button>)}
       
        <CustomAlert isOpen={isOpen} message="Are you sure you want to empty your cart ?" onClose={handleCloseAlert}  clearCart={clearCartFunction} />
        </div>
      </div>
    );
  };