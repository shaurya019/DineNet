import React,{useState} from 'react'

interface PaymentMethodChooseCompProps {
  paySubmit: boolean;
}

export const PaymentMethodChoose: React.FC<PaymentMethodChooseCompProps> = ({ paySubmit }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div>
      { paySubmit && selectedOption === null ? <h5 className='mx-4 my-3 text-red-dark text-[10px] font-medium'>Please select payment method before proceeding</h5> : ''}
      <div className={`border rounded-lg mx-4 mt-3.5 pl-7 pr-3.5 py-3 flex flex-row justify-between items-center ${selectedOption === null && paySubmit ? 'border-red-500' : 'border-gray-300'} ${selectedOption === "option1" ? 'shadow-lg text-greenCyan' : 'shadow-none'}`}>
      <h4 className={`text-xs font-medium  ${selectedOption === "option2" ? 'text-grey-sixtysix' : 'text-grey'} ${selectedOption === "option1" ? 'text-greenCyan' : 'text-grey'}`}>Online Payment</h4>
        <input
          type="radio"
          className="form-radio text-green-500 h-4 w-4"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
      </div>
      <div className={`border rounded-lg mx-4 my-3.5 pl-7 pr-3.5 py-3 flex flex-row justify-between items-center ${selectedOption === null && paySubmit ? 'border-red-500' : 'border-gray-300'} ${selectedOption === "option2" ? 'shadow-lg' : 'shadow-none'}`}>
      <h4 className={`text-xs font-medium  ${selectedOption === "option1" ? 'text-grey-sixtysix' : 'text-grey'} ${selectedOption === "option2" ? 'text-greenCyan' : 'text-grey'}`}>Cash at Counter</h4>
        <input
          type="radio"
          className="form-radio text-indigo-600 h-4 w-4"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
      </div>
    </div>
  )
}

