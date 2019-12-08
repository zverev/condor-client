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
import {createDropboxAuthPageUrl, extractAccessTokenFromUrl} from "../authorization";

interface PointProperties {
  type: string;
  label: string;
}
interface IUserConfig {
  [pointId: string]: PointProperties;
}
const userConfigTyped: IUserConfig = userConfig;

const client = new InfluxDBClient(
  "http://94.103.95.29:8086/write?db=main",
  false
);

interface IAppState {
  accessToken: string;
}
class App extends React.Component<{}, IAppState> {
  state = { accessToken: "" }

  componentDidMount(): void {
    if (!window.location.hash) {
      window.location.href = createDropboxAuthPageUrl();
    }
    this.setState({
      accessToken: extractAccessTokenFromUrl()
    });
  }

  render() {
    if (!this.state.accessToken) {
      return (
        <div>Loading</div>
      );
    }

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
            const {type, label} = userConfigTyped[pointId]
            switch (type) {
              case POINT_TYPE_SINGLE_EVENT:
                return <SingleEvent key={pointId} label={label}/>;
              case POINT_TYPE_PERCENTAGE:
                return <Percentage key={pointId} label={label}/>;
              case POINT_TYPE_GEOLOCATION:
                return <Geolocation key={pointId} label={label}/>;
              default:
                throw new Error(`Unknown point type ${userConfigTyped[pointId]}`);
            }
          })}
        </div>
      </div>
    );
  }
}

export default App;
