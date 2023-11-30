import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import "../View/node.css";

export default memo(({ data, isConnectable, id, selected }) => {
  const ClickedNode = () => {
    selected = true;
    console.log(data.sub_no, "is clicked", id, selected, data.category);
    // return data.sub_no, selected;
    return selected;
  };

  let typeColor = data.category == "gen_lab" ? "#8850EA" : "#FF7D0F";

  const nodeStyle = {
    borderRadius: "5px",
    border: "1px solid" + typeColor,
  };

  const textStyle = {
    color: typeColor,
    fontsize: "12px",
  };

  return (
    <div>
      {/* haveLab Subject */}
      <>
        <div>
          <Handle
            type="source"
            id="a"
            position={Position.Right}
            style={{ opacity: 1 }}
            isConnectable={isConnectable}
          />
          <div
            className="node"
            style={{ borderRadius: "5px", border: "1px solid" + typeColor }}
          >
            <div className="node-heading">
              <div className="txt-size" style={{ color: typeColor }}>
                {data.sub_no}
              </div>
              <input type="radio"></input>
            </div>
            <div className="node-name txt-size" style={{ color: typeColor }}>
              {data.sub_name}
            </div>
          </div>
          {/* Arrow */}
          <div className="arrow-lab"></div>
        </div>
      </>

      {/* Lab Subject */}
      <>
        <div
          className="node"
          style={{ borderRadius: "5px", border: "1px solid" + typeColor }}
        >
          <div className="node-heading">
            <div className="txt-size" style={{ color: typeColor }}>
              {data.lab_no}
            </div>
            <input type="radio"></input>
          </div>
          <div className="node-name txt-size" style={{ color: typeColor }}>
            {data.lab_name}
          </div>
        </div>
      </>
    </div>
  );
});
