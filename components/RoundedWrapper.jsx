import React from "react";

const RoundedWrapper = ({ children }) => {
  return (
    <div className="rounded-t-3xl min-h-screen overflow-hidden flex flex-col">
      {children}
    </div>
  );
};

export default RoundedWrapper;
