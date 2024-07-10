/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { RenderIfProps } from "./render-if.type";

const RenderIf: React.FC<RenderIfProps> = ({ children, isTrue }) =>
  isTrue ? <>{children}</> : null;

RenderIf.displayName = "RenderIf";

export default RenderIf;
