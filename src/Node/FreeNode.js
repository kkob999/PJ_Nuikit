import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import "../View/node.css";

export default memo(({ data, isConnectable, id, selected }) => {
  const ClickedNode = () => {
    selected = true;
    console.log(data.sub_no, "is clicked", id, selected, data.category);
    return selected;
  };

  const isPass = true;

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ opacity: 0 }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div className="node free-node">
        <div className="node-heading">
          <div className="free-txt">{data.sub_no}</div>
          <input className="" type="radio" ></input>
        </div>
        <div className="free-txt node-name">{data.sub_name}</div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        // hidden = "true"
        id="a"
        style={{ opacity: 0 }}
        isConnectable={isConnectable}
      />
    </>
  );
});
