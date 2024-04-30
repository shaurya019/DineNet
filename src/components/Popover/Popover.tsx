import React, { useRef, useState, useEffect } from "react";

type PopoverProps = {
  targetRef: React.RefObject<HTMLElement|SVGSVGElement>;
  children: React.ReactNode
};

export const Popover: React.FC<PopoverProps> = ({ targetRef, children }) => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });
  const [open, setOpen] = useState<boolean>(false);
  const userProfileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleResize();
  }, [targetRef]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    targetRef?.current?.addEventListener("click", handleTargetClick);
    return () => {
      targetRef?.current?.removeEventListener("click", handleTargetClick);
    };
  }, []);

  const handleTargetClick = () => {
    setOpen((open) => !open);
  };

  function handleResize() {
    if (targetRef.current && userProfileRef.current) {
      const targetBounds = targetRef.current.getBoundingClientRect();
      const profileBounds = userProfileRef.current.getBoundingClientRect();
      let left =
        targetBounds.left + targetBounds.width / 2 - profileBounds.width / 2;
      left = Math.min(
        Math.max(left, 10),
        window.innerWidth - profileBounds.width - 10
      );
      let top = targetBounds.top + targetBounds.height + 10;
      top = Math.min(
        Math.max(top, 10),
        window.innerHeight - profileBounds.height - 10
      );
      setPosition({
        top,
        left,
      });
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={userProfileRef}
      className="absolute z-10 bg-white shadow-lg w-56"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {open && children}
    </div>
  );
};
