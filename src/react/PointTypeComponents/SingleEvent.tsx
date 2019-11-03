import React from "react";
import Button from "../Button";
import IPointTypeComponentProps from "./IPointTypeComponentProps";

const SingleEvent = ({ label }: IPointTypeComponentProps) => (
  <Button color="#0000ff" label={label} onClick={() => console.log("SingleEvent clicked")} />
);

export default SingleEvent;
