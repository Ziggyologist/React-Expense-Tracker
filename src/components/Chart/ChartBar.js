import React, {useState} from "react";

import "./ChartBar.css";

const ChartBar = props => {
  const [click, setClick] = useState(false);
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  const showFilter = e => {
    setClick(!click);
    if (!click) {
      e.target.style.backgroundColor = "red";
      setClick(true);
    } else {
      e.target.style.backgroundColor = "#4826b9";
      setClick(false);
    }
  };

  return (
    <div className="chart-bar" onClick={showFilter} title={barFillHeight}>
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{height: barFillHeight, cursor: "pointer"}}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
