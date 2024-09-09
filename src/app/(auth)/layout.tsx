import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-md mx-auto mt-40">{children}</div>;
};

export default Layout;
