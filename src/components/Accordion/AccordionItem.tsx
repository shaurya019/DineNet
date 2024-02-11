import { ReactNode, useState } from "react";

export interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen((open) => !open);
  return (
    <div
      className={`border border-gray-200 overflow-auto ${
        isOpen && "min-h-[30rem]"
      }`}
    >
      <div
        className="flex justify-between items-center p-2 cursor-pointer bg-green-light"
        onClick={toggleAccordion}
      >
        <h2 className="text-sm text-green font-semibold">{title}</h2>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? "transform rotate-360" : ""
          } stroke-green`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
          />
        </svg>
      </div>
      <div
        className={`transition-[max-height] ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden delay-150`}
      >
        <div className="p-4 border-t border-gray-200">
          <div className="text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  );
};
