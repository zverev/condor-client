import React from "react";
import { style } from "typestyle";
import * as csstips from "csstips";
import InfluxDBClient from "../influxdb";
import userConfig from "../user-config.json";
import {
  POINT_TYPE_GEOLOCATION,
  POINT_TYPE_SINGLE_EVENT,
  POINT_TYPE_PERCENTAGE
} from "../points";
import SingleEvent from "./PointTypeComponents/SingleEvent";
import Percentage from "./PointTypeComponents/Percentage";
import Geolocation from "./PointTypeComponents/Geolocation";

interface IUserConfig {
  [pointId: string]: string;
}
const userConfigTyped: IUserConfig = userConfig;

const client = new InfluxDBClient(
  "http://94.103.95.29:8086/write?db=main",
  false
);

function App() {
  return (
    <div className={style(csstips.fillParent, csstips.centerCenter)}>
      <div
        className={style({
          display: "flex",
          flexDirection: "column",
          minWidth: "200px",
          $nest: {
            "&>*": {
              marginBottom: "8px"
            }
          }
        })}
      >
        {Object.keys(userConfig).map(pointId => {
          switch (userConfigTyped[pointId]) {
            case POINT_TYPE_SINGLE_EVENT:
              return <SingleEvent />;
            case POINT_TYPE_PERCENTAGE:
              return <Percentage />;
            case POINT_TYPE_GEOLOCATION:
              return <Geolocation />;
            default:
              throw new Error(`Unknown point type ${userConfigTyped[pointId]}`);
          }
        })}
      </div>
    </div>
  );
}

export default App;
