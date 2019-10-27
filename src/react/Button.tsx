import React from "react";
import { style } from "typestyle";

interface IButtonProps {
  title: string;
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
      })}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  )
}

export default Button;
