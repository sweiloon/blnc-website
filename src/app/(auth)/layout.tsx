import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div  className="flex justify-center item-center mt-20">{children}</div>;
};

export default Layout;
