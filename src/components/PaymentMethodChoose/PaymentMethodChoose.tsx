import React,{useState} from 'react'

interface PaymentMethodChooseCompProps {
  submit: boolean;
  final: boolean;
  setSubmit:React.Dispatch<React.SetStateAction<boolean>>;
  Option: string | "Option3"; 
  SelectedOption: (option: string | "Option3") => void;
}

export const PaymentMethodChoose: React.FC<PaymentMethodChooseCompProps> = ({ submit,final,Option,setSubmit,SelectedOption }) => {

  // console.log("PaymentMethodChoose Option - ",Option,"Submit - ",submit);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SelectedOption(event.target.value);
  };

  const handleDivClick = (option:any) => {
    SelectedOption(option);
  };


  return (
    <div>
      { submit && Option === "Option3" ? <h5 className='mx-4 my-3 text-red-dark text-[10px] font-medium'>Please select payment method before proceeding</h5> : ''}
      <div onClick={() => handleDivClick('Option1')} className={`border rounded-lg mx-4 mt-3.5 pl-7 pr-3.5 py-3 flex flex-row justify-between items-center ${Option === "Option3" && submit ? 'border-red-500' : 'border-gray-300'} ${Option === "Option1" ? 'shadow-lg text-greenCyan' : 'shadow-none'}`}>
      <h4 className={`text-xs font-medium ${Option === "Option3" ? 'text-grey' : Option === "Option1" ? 'text-greenCyan' : 'text-grey-sixtysix'}`}>Online Payment</h4>
        <input
          type="radio"
          className={`form-radio text-green-500 h-4 w-4`}
          value="Option1"
          checked={Option === "Option1"}
          onChange={handleOptionChange}
          disabled={final}
        />
      </div>
      <div onClick={() => handleDivClick('Option2')} className={`border rounded-lg mx-4 my-3.5 pl-7 pr-3.5 py-3 flex flex-row justify-between items-center ${Option === "Option3" && submit ? 'border-red-500' : 'border-gray-300'} ${Option === "Option2" ? 'shadow-lg' : 'shadow-none'}`}>
      <h4 className={`text-xs font-medium ${Option === "Option3" ? 'text-grey' : Option === "Option2" ? 'text-greenCyan' : 'text-grey-sixtysix'}`}>Cash at Counter</h4>
        <input
          type="radio"
          className="form-radio text-green-600 h-4 w-4"
          value="Option2"
          checked={Option === "Option2"}
          onChange={handleOptionChange}
          disabled={final}
        />
      </div>
    </div>
  )
}

