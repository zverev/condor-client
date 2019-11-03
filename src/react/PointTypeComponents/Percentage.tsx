import React from "react";
import IPointTypeComponentProps from "./IPointTypeComponentProps";
import Button from "../Button";

const Percentage = ({ label }: IPointTypeComponentProps) => (
  <div>
    <select>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((percentageStep) => (
        <option value={`${percentageStep * 10}`}>{`${percentageStep * 10}`}</option>
      ))}
    </select>
    <Button label={label} onClick={() => null} color="#ff0000" />
  </div>
);

export default Percentage;
