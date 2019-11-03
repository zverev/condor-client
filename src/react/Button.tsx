import React from "react";
import { style } from "typestyle";

interface IButtonProps {
  color: string;
  label: string;
  onClick: () => void;
}
function Button(props: IButtonProps) {
  return (
    <div
      className={style({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0000ff",
        padding: "12px 24px",
        color: "white",
        cursor: "pointer",
        backgroundColor: props.color,
      })}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  )
}

export default Button;
