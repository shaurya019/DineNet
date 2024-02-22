import React, { ReactNode, useState } from "react";

interface ITruncatedParagraph {
  className?: string;
  children: ReactNode;
}
export const TruncatedParagraph = ({
  className,
  children,
}: ITruncatedParagraph) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((expanded) => !expanded);
  return (
    <p
      className={`${!expanded && "line-clamp-2"} ${className}`}
      onClick={toggleExpand}
    >
      {children}
    </p>
  );
};
