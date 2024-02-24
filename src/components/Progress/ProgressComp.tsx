import React from 'react'
import Notes from '../../assets/icons/Notes'
import OnlineOrder from '../../assets/icons/OnlineOrder'
import TaskCompleted from '../../assets/icons/TaskCompleted'

interface ProgressCompProps {
    one: string;
    two: string;
    third: string;
    value: string;
  }
  
  export const ProgressComp: React.FC<ProgressCompProps> =({ one, two, third,value }) => {
  return (
    <div className="bg-white mx-5 mb-4 h-44 px-0 pt-3 items-center  rounded-md shadow-lg text-blue-dark">
    <div className="flex flex-col">
      <h4 className="mx-3 font-semibold text-green-mineral text-xs">
        Progress
      </h4>
      <div className="flex flex-col">
        <div className="flex flex-row items-center mx-2 mt-6 mb-4">
          <h5 className="w-1/3 text-[10px] text-grey text-xs text-left">
            {one}
          </h5>
          <h5 className="w-1/3 text-[10px] text-grey text-xs text-center">
            {two}
          </h5>
          <h5 className="w-1/3 text-[10px] text-grey text-xs text-right">
            {third}
          </h5>
        </div>
        <div className="mx-2 flex flex-row">
        <div className={`relative h-2 w-1/2 border border-solid ${value !== "0" ? 'bg-green-arapawashade' : 'bg-green-salad'} rounded`} />
        <div className={`relative h-2 w-1/2 border border-solid ${value === "2" ? 'bg-green-arapawashade' : 'bg-green-salad'} rounded`} />
        </div>
        <div className="mx-2 flex flex-row  justify-between mt-[-20px]">
<div className="relative flex items-center justify-center h-[28px] w-[28px] border bg-green-arapawa rounded-full w-1/3">
  <OnlineOrder />
</div>
<div className={`relative flex items-center justify-center h-[28px] w-[28px] border ${value !== "0" ? 'bg-green-arapawa' : 'bg-grey-cadet'} rounded-full w-1/3`}>
  <Notes />
</div>
<div className={`relative flex items-center justify-center h-[28px] w-[28px] border ${value === "2" ? 'bg-green-arapawa' : 'bg-grey-cadet'} rounded-full w-1/3`}>
  <TaskCompleted />
</div>
        </div>
      </div>
    </div>
  </div>
  )
}

