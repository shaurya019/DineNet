import React from 'react';
import { MealAddOnsComponent } from '../MealAddOnsComponent/MealAddOnsComponent';

interface MealAddOnsProps {
  meals: any[];
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MealAddOns = ({ meals,refresh, setRefresh}: MealAddOnsProps) => {
  return (
    <div className="max-h-[200px] overflow-y-auto whitespace-nowrap my-[14px]">
      <div className="inline-block min-w-screen px-2 py-2">
        <div className="flex space-x-4">
          {meals.map((meal: any, index: number) => (
            <MealAddOnsComponent key={index} meal={meal} refresh={refresh} setRefresh={setRefresh} />
          ))}
        </div>
      </div>
    </div>
  );
};
