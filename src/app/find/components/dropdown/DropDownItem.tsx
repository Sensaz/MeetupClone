import { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode;
}

const DropDownItem = ({ children }: MyComponentProps) => {
  return <li className="dropdown__item">- {children}</li>;
};

export default DropDownItem;
