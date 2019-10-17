import React from "react";
import { style } from "typestyle";
import * as csstips from "csstips";
import InfluxDBClient from "../influxdb"

const client = new InfluxDBClient("http://94.103.95.29:8086/write?db=main", false);

function App() {
  return (
    <div className={style(csstips.fillParent, csstips.centerCenter)}>
      <div
        className={style({
          background: "#0000ff",
          padding: "12px 24px",
          color: "white",
          cursor: "pointer",
        })}
        onClick={() => {
          client.point('key',{value:1},{tag:'tag_name'});
          client.send();
        }}
      >
        Add Point
      </div>
    </div>
  );
}

export default App;
