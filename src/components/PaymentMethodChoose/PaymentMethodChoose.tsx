import React,{useState} from 'react'

interface PaymentMethodChooseCompProps {
  submit: boolean;
  final: boolean;
  setSubmit:React.Dispatch<React.SetStateAction<boolean>>;
  Option: string | "Option3"; 
  SelectedOption: (option: string | "Option3") => void;
}

export const PaymentMethodChoose: React.FC<PaymentMethodChooseCompProps> = ({ submit,final,Option,setSubmit,SelectedOption }) => {

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(!final){
      SelectedOption(event.target.value);
    }
  };

  const handleDivClick = (option:any) => {
    if(!final){
      SelectedOption(option);
    }
  };

  console.log('Final prop:', final);
  return (
    <div>
      { submit && Option === "Option3" ? <h5 className='mx-4 my-3 text-red-dark text-[10px] font-medium'>Please select payment method before proceeding</h5> : ''}
      <div onClick={() => handleDivClick('ONLINE')} className={`border rounded-lg mx-4 mt-3.5 pl-7 pr-3.5 py-3 flex flex-row justify-between items-center ${Option === "Option3" && submit ? 'border-red-500' : 'border-gray-300'} ${Option === "ONLINE" ? 'shadow-lg text-greenCyan' : 'shadow-none'}`}>
      <h4 className={`text-xs font-medium ${Option === "Option3" ? 'text-grey' : Option === "ONLINE" ? 'text-greenCyan' : 'text-grey-sixtysix'}`}>Online Payment</h4>
        <input
          type="radio"
          className={`form-radio text-green-500 h-4 w-4`}
          value="ONLINE"
          checked={Option === "ONLINE"}
          onChange={handleOptionChange}
          disabled={final}
        />
      </div>
      <div onClick={() => handleDivClick('OFFLINE')} className={`border rounded-lg mx-4 my-3.5 pl-7 pr-3.5 py-3 flex flex-row justify-between items-center ${Option === "Option3" && submit ? 'border-red-500' : 'border-gray-300'} ${Option === "OFFLINE" ? 'shadow-lg' : 'shadow-none'}`}>
      <h4 className={`text-xs font-medium ${Option === "Option3" ? 'text-grey' : Option === "OFFLINE" ? 'text-greenCyan' : 'text-grey-sixtysix'}`}>Cash at Counter</h4>
        <input
          type="radio"
          className="form-radio text-green-600 h-4 w-4"
          value="OFFLINE"
          checked={Option === "OFFLINE"}
          onChange={handleOptionChange}
          disabled={final}
        />
      </div>
    </div>
  )
}

