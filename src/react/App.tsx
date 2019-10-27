import React from "react";
import { style } from "typestyle";
import * as csstips from "csstips";
import InfluxDBClient from "../influxdb";
import Button from "./Button";
import userConfig from "../user-config.json";

interface IUserConfig {
  [key: string]: string;
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
        {Object.keys(userConfig).map(key => (
          <Button
            title={userConfigTyped[key]}
            onClick={() => {
              client.point("key", { value: 1 }, { tag: "tag_name" });
              client.send();
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
