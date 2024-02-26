import React from 'react'
import {MealAddOnsComponent} from '../MealAddOnsComponent/MealAddOnsComponent'

export const MealAddOns = () => {
  return (
    <div className="overflow-auto whitespace-nowrap my-[14px]">
    <div className="inline-block min-w-screen px-4 py-2">
      <div className="flex space-x-4">
        <MealAddOnsComponent name="Coke" price="50"/>
        <MealAddOnsComponent name="Kulfi" price="80"/>
        <MealAddOnsComponent name="Coke" price="50"/>
      </div>
    </div>
  </div>
  )
}


