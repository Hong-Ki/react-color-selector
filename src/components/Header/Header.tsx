import React, { SFC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Header: SFC<Props> = ({ children }) => {
  return <div className={"header"}>{children}</div>;
};

export default Header;
