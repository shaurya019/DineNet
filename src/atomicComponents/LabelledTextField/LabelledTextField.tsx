import React, { useState, ChangeEvent } from "react";

interface ILabelledTextField extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  className?: string;
  placeholder?: string;
  error?: string; // Adding error prop
  errorClassName?: string; // You might want to add this as well if you plan to style error messages differently
}

export const LabelledTextField = ({
  label,
  labelClassName,
  inputClassName,
  className,
  placeholder,
  value,
  error, // Using error prop
  ...inputProps
}: ILabelledTextField) => {
  const [showLabel, setShowLabel] = useState(false);
  const toggleShowLabel = () => setShowLabel((showLabel) => !showLabel);
  return (
    <div className={`relative w-full ${className}`}>
      {(showLabel || value) && (
        <label
          className={`absolute bg-white text-xxs text-green left-4 -top-1.5 px-1 ${
            inputProps.disabled && "text-opacity-50"
          } ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        onFocus={toggleShowLabel}
        onBlur={toggleShowLabel}
        placeholder={placeholder}
        className={`border border-green focus:border-green p-2 w-full rounded text-xs text-green placeholder-green bg-white disabled:border-opacity-50 disabled:text-opacity-50 ${inputClassName} ${error ? 'border-red-500' : ''}`} // Adding red border class if there's an error
        value={value}
        {...inputProps}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>} {/* Displaying error message */}
    </div>
  );
};
