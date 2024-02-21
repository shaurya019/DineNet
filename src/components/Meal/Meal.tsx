import React from 'react'
import {CardComponent} from '../Card/CardComponent'

export const Meal = () => {
  return (
    <div className="overflow-auto whitespace-nowrap my-[14px]">
    <div className="inline-block min-w-screen px-4 py-2">
      <div className="flex space-x-4">
        <CardComponent name="Coke" price="50"/>
        <CardComponent name="Kulfi" price="80"/>
        <CardComponent name="Coke" price="50"/>
      </div>
    </div>
  </div>
  )
}


