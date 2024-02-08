import { TypographyProps, Typography } from "@mui/material";
import React from "react";
interface ITypographyProps extends TypographyProps {
  fs?: string | number;
  fw?: string | number;
}
export const CustomTypography = (extendedProps: ITypographyProps) => {
  const {
    fs = extendedProps.fontSize,
    fw = extendedProps.fontWeight,
    ...props
  } = extendedProps;
  return (
    <Typography
      fontFamily="Montserrat"
      fontSize={fs}
      fontWeight={fw}
      {...props}
    />
  );
};
