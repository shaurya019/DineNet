import React, { ChangeEvent, useRef, useState } from "react";

export const OTPInput = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([null, null, null, null]);

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain');
    const newOtp = [...otp];

    for (let i = 0; i < pasteData.length && i < 4; i++) {
      newOtp[i] = pasteData.charAt(i);
    }

    setOtp(newOtp);
    inputRefs.current[0]?.focus();
  };
  return (
    <div className="flex gap-2 justify-start items-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          className="h-9 w-9 rounded border border-green text-center text-grey text-xs"
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
          onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => handlePaste(e)}
        />
      ))}
    </div>
  );
};
