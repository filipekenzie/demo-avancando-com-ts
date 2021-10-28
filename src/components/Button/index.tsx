import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  children: ReactNode;
  deleted?: boolean;
  onClick: () => void;
}

const Button = ({ deleted = false, children, onClick }: ButtonProps) => {
  return (
    <ButtonStyled isDeleted={deleted} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
