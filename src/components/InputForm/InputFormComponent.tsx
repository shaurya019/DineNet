import React from 'react'


interface InputFormComponentProps {
  submit: boolean;
  final: boolean;
  phone: string;
  name: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const InputFormComponent: React.FC<InputFormComponentProps> = ({ submit, final, phone, name, setPhone, setName }) => {
  return (
    <div className="flex flex-col mx-3.5 mb-4">
       { submit && (name === '') ? <h5 className='mx-4 mt-3 text-red-dark text-[10px] font-medium'>Please Fill The Required Details</h5> : ''}
      <div className="relative z-0 w-full group">
        <label htmlFor="first_name" className="font-mono font-medium  text-[11px]  text-green-willam bg-white relative px-1  top-3 left-3 w-auto">
          Full Name
        </label>
        <input
          type="text"
          id="first_name"
          className={`h-9 text-[11px] text-green-willam bg-white border ${submit && name.trim() === '' ? 'border-red-500' : 'border-green-willam'} focus:border-blue-400 rounded-lg w-full p-2.5`}
          placeholder="Full Name"
          value={name === '' ? '' : name} 
          onChange={(e) => setName(e.target.value)}
          readOnly={final}
        />

      </div>
      {/* <div className="relative z-0 w-full group">
        <label htmlFor="first_phone" className="font-mono font-medium  text-[11px]  text-green-willam bg-white relative px-1  top-3 left-3 w-auto">
          Phone Number
        </label>
        <input type="text" id="first_name"
         className={`h-9 text-[11px] text-green-willam bg-white border border-green-willam  ${submit && phone.trim() === '' ? 'border-red-500' : 'border-green-willam'} focus:border-green-willam rounded-lg w-full p-2.5 `}
          placeholder="Phone Number"
         value={phone === '' ? '' : phone} 
          onChange={(e) => setPhone(e.target.value)}
          readOnly={final}
        />
      </div> */}
    </div>
  )
}

