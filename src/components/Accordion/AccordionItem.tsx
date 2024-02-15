import { Chevron } from "@/assets/icons/Chevron";
import { ReactNode, useState } from "react";

export interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleAccordion = () => setIsOpen((open) => !open);
  return (
    <div
      className={`border border-gray-200 ${
        isOpen && "min-h-min"
      } ${!isOpen && 'mb-2'}`}
    >
      <div
        className="flex justify-between items-center p-2 cursor-pointer bg-green-light"
        onClick={toggleAccordion}
      >
        <h2 className="text-sm text-green font-semibold">{title}</h2>
        <Chevron isOpen={isOpen} />
      </div>
      <div
        className={`transition-[max-height] ${
          isOpen ? "max-h-full" : "max-h-0"
        } overflow-auto delay-150`}
      >
        <div className="p-2 border-t border-gray-200">
          <div className="text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
};
