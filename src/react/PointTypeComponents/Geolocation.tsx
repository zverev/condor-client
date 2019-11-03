import React from "react";
import Button from "../Button";
import IPointTypeComponentProps from "./IPointTypeComponentProps";

const Geolocation = ({ label }: IPointTypeComponentProps) => (
  <Button color="#00ff00" label={label} onClick={() => console.log("Geolocation clicked")} />
);

export default Geolocation;
