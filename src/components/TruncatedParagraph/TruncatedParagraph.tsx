import React, { useState } from "react";

interface ITruncatedParagraph {
  className?: string;
}
export const TruncatedParagraph = ({ className }: ITruncatedParagraph) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((expanded) => !expanded);
  return (
    <p
      className={`${!expanded && "line-clamp-2"} ${className}`}
      onClick={toggleExpand}
    >
      Cottage cheese fritters served with asnaisn asuabsa sansians as ansansa
      sansiansas asansan
    </p>
  );
};
