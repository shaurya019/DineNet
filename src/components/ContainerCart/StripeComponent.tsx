import React from 'react'

interface StripeProps {
    title: string; 
  }
  
  export const StripeComponent: React.FC<StripeProps> = ({ title }) => {
    return (
        <div className="bg-green-mintcream text-white py-2 px-3.5 flex justify-between items-center">
          <div className="flex items-left">
            <span className="font-semibold text-xs text-green-mineral">{title}</span>
          </div>
          </div>
      )
}

