import React from "react";

interface Props {
  children: React.ReactNode;
}
const AsideBox: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-darkLight rounded-[17px] shadow px-5 py-3">
      {children}
    </div>
  );
};

export default AsideBox;
