import { Slide } from "@mui/material";
import React from "react";
import { FullScreenModalTransitionProps } from "types";

export const FullScreenModalTransition = React.forwardRef<
  unknown,
  FullScreenModalTransitionProps
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
