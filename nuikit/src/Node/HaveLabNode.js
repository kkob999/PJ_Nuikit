import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import "../View/node.css"

export default memo(({ data, isConnectable, id, selected }) => {

  let typeColor = data.category === 'gen_lab' ? "#8850EA" : "#FF7D0F";

  return (
    <>
    <Handle
        type="source"
        id="a"
        position={Position.Top}
        style={{ opacity: 1 }}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Left}
        // hidden = "true"
        style={{ opacity: 1 }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      {/* <div onClick={ClickedNode} className="node gen-node">  */}
      <div className="node" style={{borderRadius: '5px',border: '1px solid'+typeColor}}>
        <div className="node-heading">
            <div className="txt-size" style={{color: typeColor}}>{data.sub_no}</div>
            <input type="radio"></input>
        </div>
        <div className="node-name txt-size" style={{color: typeColor}}>{data.sub_name}</div>
        {/* <div>{isClicked()}</div> */}
      </div>
      <Handle
        type="source"
        id="b"
        position={Position.Bottom}
        style={{ opacity: 1 }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        id="c"
        position={Position.Right}
        style={{opacity: 1}}
        isConnectable={isConnectable}
      />
    </>
  );
});
