import React from 'react'
import { Plus } from '../../assets/icons/Plus';

interface CartDataProps {
  name: string;
  price: string;
}

export const CardComponent: React.FC<CartDataProps> = ({ name, price }) => {

  const addThings = () => {
    // Handle Add Items logic here
  };

  return (
    <div className="flex-col">
      <div className="bg-gray-200 w-32 h-32 mb-1.5 flex items-center justify-center rounded-md">

      </div>
      <div className="bg-white w-32 h-26 flex items-center justify-between rounded-md shadow-lg" style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
        <h5 className="font-medium text-firefly text-xs ml-1.5">{name}</h5>
        <div className="flex items-center">
          <h5 className="font-medium text-firefly text-xs mr-1.5"><span>&#8377;</span>{price}</h5>
          <button onClick={addThings} className="m-1 bg-laurel w-8 h-8 rounded-md flex items-center justify-center">
          <Plus className="stroke-white" />
          </button>
        </div>
      </div>

    </div>
  )
}
