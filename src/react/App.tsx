import React from "react";
import { style } from "typestyle";
import * as csstips from "csstips";
import InfluxDBClient from "../influxdb"
import Button from "./Button";

const client = new InfluxDBClient("http://94.103.95.29:8086/write?db=main", false);

function App() {
  return (
    <div className={style(csstips.fillParent, csstips.centerCenter)}>
      <Button
        title="Add Point"
        onClick={() => {
          client.point('key',{value:1},{tag:'tag_name'});
          client.send();
        }}
      />
    </div>
  );
}

export default App;
