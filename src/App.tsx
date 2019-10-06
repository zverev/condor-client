import React from "react";
import { style } from "typestyle";
import * as csstips from "csstips";

function App() {
  return (
    <div className={style(csstips.fillParent, csstips.centerCenter)}>
      hellos
    </div>
  );
}

export default App;
