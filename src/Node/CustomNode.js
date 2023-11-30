import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import "../View/node.css"

export default memo(({ data, isConnectable, id, selected }) => {
  const ClickedNode = () => {
    selected = true
    console.log(data.sub_no, "is clicked", id, selected,data.category );
    // return data.sub_no, selected;
    return selected;
  };
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        // hidden = "true"
        style={{ opacity: 0 }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      {/* <div onClick={ClickedNode} className="node gen-node">  */}
      <div className="node gen-node">
        <div className="node-heading">
            <div className="gen-txt">{data.sub_no}</div>
            <input type="radio"></input>
        </div>
        <div className="gen-txt node-name">{data.sub_name}</div>
        {/* <div>{isClicked()}</div> */}
      </div>
      {/* <input className="nodrag" type="color" onChange={data.onChange} defaultValue={data.color} /> */}
      <Handle
        type="source"
        position={Position.Right}
        // hidden = "true"
        id="a"
        style={{opacity: 0}}
        isConnectable={isConnectable}
      />
    </>
  );
});
