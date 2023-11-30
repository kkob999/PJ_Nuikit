import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import ReactFlow, {
  Controls,
  Background,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  useEdges,
} from "reactflow";
// import { SmartBezierEdge, SmartStepEdge,SmartStraightEdge,svgDrawSmoothLinePath,
// 	svgDrawStraightLinePath,getSmartEdge } from "@tisoap/react-flow-smart-edge";notuse
import ELK from "elkjs/lib/elk.bundled.js";
import CustomNode from "./Node/CustomNode.js";
import SpecNode from "./Node/SpecNode.js";
import "reactflow/dist/style.css";
import "./View/home.css";
import "./View/flow.css";
import { nodes as initialNodes } from "./Model/Node.js";
// import isClicked from './CustomNode.js'

const elk = new ELK();

const elkOptions = {
  // 'elk.spacing.nodeNode': '80',
  "elk.crossingMinimization.semiInteractive": "true",
  "elk.layering.strategy": "INTERACTIVE",
};

const getLayoutedElements = (nodes, edges, options = {}) => {
  const graph = {
    id: "root",
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      targetPosition: "left",
      sourcePosition: "right",

      width: 150,
      height: 50,
    })),
    edges: edges.map((edge) => ({
      ...edge,
      id: edge.id,
      label: edge.id,
      source: edge.source,
      target: edge.target,
      hidden: false
  }))
  };
  
  return elk
    .layout(graph)
    .then((layoutedGraph) => ({
      nodes: layoutedGraph.children.map((node) => ({
        ...node,
        // position: { x: node.position.x, y: node.position.y },
        position: { x: node.x, y: node.y },
      })),
      edges: layoutedGraph.children.map((edge) => ({
        ...edge,
        id: edge.id,
        source: edge.source,
        target: edge.target,
        // outline: "1px solid red"
      })),
    }))
    .catch(console.error);
    
};

// const edgeTypes = {
//   smart: SmartBezierEdge,
// };

const nodeTypes = {
  gen_node: CustomNode,
  spec_node: SpecNode,
};

let ed = [
  { id: "eng#1-2", source: "1", target: "2", type: "smoothstep", animated: true, hidden: true },
  { id: "eng#2-3", source: "2", target: "3", type: "smoothstep", animated: true, hidden: true },
  { id: "eng#3-4", source: "3", target: "4", type: "smoothstep", animated: true , hidden: true},
  // { id: "eng#2-4", source: "2", target: "4", type: "smoothstep", animated: true, hidden: true },

  { id: "math#6-7", source: "6", target: "7", type: "smoothstep", animated: true , hidden: true},
  { id: "math#7-8", source: "7", target: "8", type: "smoothstep", animated: true , hidden: true},
  { id: "math#8-9", source: "8", target: "9", type: "smoothstep", animated: true , hidden: true},

];

function Flow() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(ed);
  const [hidden, setHidden] = useState(true);
  let [node_name, setNodeName] = useState("");
  const [hidden_edges, setHiddenEdges] = useEdgesState();
  const [hidden_nodes, setHiddenNodes] = useNodesState();

  const onNodeClick = (event, node) => {

    setNodeName(node.data.category);
    console.log(node_name);
    var arr = [];
    var arr_nd = [];
    edges.map((e) => {
      if (e.id.split("#")[0] == node.data.category) {
        setHidden((hidden) => !hidden);
        // console.log(e.id);
        arr.push(e);
      }
    });

    nodes.map((nd) => {
      if (nd.data.category !== node_name) {
        arr_nd.push(nd);
      }
    });
    setHiddenEdges(arr);
    setHiddenNodes(arr_nd);
    return node;
  };

  const [captureElementClick, setCaptureElementClick] = useState(false);

  const hideEdge = (hidden) => (Edge) => {
    if (Edge.id.split("#")[0] === node_name) Edge.hidden = hidden;
    return Edge;
  };

  useEffect(() => {
    setEdges((eds) => eds.map(hideEdge(hidden)));
    console.log(ed[0].source)
    console.log(initialNodes[0].id)
    // setNodes((nds) => nds.map(hideNode(hidden)));
  }, [hidden]);

  const onLayout = useCallback(
    ({ direction, useInitialNodes = false }) => {
      const opts = { "elk.direction": direction, ...elkOptions };
      const ns = initialNodes;
      const es = ed;

      getLayoutedElements(ns, es, opts).then(
        ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
          setNodes(layoutedNodes);
          setEdges(layoutedEdges);
        }
      );
    },
    [nodes, edges]
  );

  // Calculate the initial layout on mount.
  useLayoutEffect(() => {
    onLayout({ direction: "RIGHT", useInitialNodes: true });
  }, []);

  return (
    <div className="flow-contain">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          // onNodesChange={onNodesChange}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          // edgeTypes={edgeTypes}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
        >
          {/* <Background /> */}
          <div className="main">
            {/* <div>{isClicked()}</div> */}
            <div className="contain-subject1">
              <h3>First Year</h3>
              <div className="contain-semi">
                <div className="contain-semi-right">
                  <h5>1st sem </h5>
                </div>
                <div className="contain-semi-left">
                  <h5>2nd sem</h5>
                </div>
              </div>
            </div>

            <div className="contain-subject2">
              <h3>Second Year</h3>

              <div className="contain-semi">
                <div className="contain-semi-right">
                  <h5>1st sem</h5>
                </div>
                <div className="contain-semi-left">
                  <h5>2nd sem</h5>
                </div>
              </div>
            </div>

            <div className="contain-subject3">
              <h3>Third Year</h3>

              <div className="contain-semi">
                <div className="contain-semi-right">
                  <h5>1st sem</h5>
                </div>
                <div className="contain-semi-left">
                  <h5>2nd sem</h5>
                </div>
              </div>
            </div>

            <div className="contain-subject4">
              <h3>Fourth Year</h3>
              <div className="contain-semi">
                <div className="contain-semi-right">
                  <h5>1st sem</h5>
                  <h1>{captureElementClick}</h1>
                </div>
                <div className="contain-semi-left">
                  <h5>2nd sem</h5>
                </div>
              </div>
            </div>
          </div>

          {/* <Controls /> */}
        </ReactFlow>
      </ReactFlowProvider>
      <div></div>
    </div>
  );
}

export default Flow;
