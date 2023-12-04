import { serverNodes, serverEdges } from "./Model/nodes-edges.js";
import ELK from "elkjs/lib/elk.bundled.js";
import React, { useCallback, useLayoutEffect, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  applyNodeChanges,
  useViewport,
} from "reactflow";

import "reactflow/dist/style.css";
import CustomNode from "./Node/CustomNode.js";
import SpecNode from "./Node/SpecNode.js";
import LabNode from "./Node/LabNode.js";
import HaveLabNode from "./Node/HaveLabNode.js";
import HaveLabNode2 from "./Node/HaveLabNode2.js";
import FreeNode from "./Node/FreeNode.js";



const elk = new ELK();

const elkOptions = {
  "elk.algorithm": "layered",
  "elk.direction": "RIGHT",
  //   "layered.spacing.nodeNodeBetweenLayers": 400,
  "elk.spacing.nodeNode": 2,
  "layered.crossingMinimization.strategy": "true",
  // "layering.strategy": "INTERACTIVE",
  "separateConnectedComponents": "false",
  "elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
  // "elk.layered.crossingMinimization.forceNodeModelOrder": "true",
  "elk.interactiveLayout": "true",
};

const nodeTypes = {
  gen_node: CustomNode,
  spec_node: SpecNode,
  free_node: FreeNode,
  lab_node: LabNode,
  haveLab_node: HaveLabNode,
  haveLab_node2: HaveLabNode2,
};

const getLayoutedElements = (nodes, edges, options = {}) => {
//   console.log(nodes);
  const graph = {
    id: "root",
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      width: 20,
      height: 60,
      position: { x: node.position.x },
    })),
    edges: edges.map((edge) => ({
      ...edge,
      animated: true,
    })),
  };

  return elk
    .layout(graph)
    .then((layoutedGraph) => ({
      nodes: layoutedGraph.children.map((node) => ({
        ...node,
        position: { x: node.position.x, y: node.y },
      })),

      edges: layoutedGraph.edges,
    }))
    .catch(console.error);
};

const graph2 = [
  {
    id: "t",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

function LayoutFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes2, setNodes2] = useState(graph2);
  const onNodesChange2 = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const { fitView } = useReactFlow();

  const { x, y, zoom } = useViewport();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  const onLayout = useCallback(
    ({ direction, useInitialNodes = false }) => {
      const opts = { "elk.direction": direction, ...elkOptions };
      const ns = useInitialNodes ? serverNodes : nodes;
      const es = useInitialNodes ? serverEdges : edges;

      getLayoutedElements(ns, es, opts).then(
        ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
          setNodes(layoutedNodes);
          setEdges(layoutedEdges);
          //   window.requestAnimationFrame(() => fitView());
        }
      );
    },
    [nodes, edges]
  );

  useLayoutEffect(() => {
    onLayout({ direction: "RIGHT", useInitialNodes: true });

    // console.log(serverNodes[0].position.x);
  }, []);

//   console.log(document.getElementsByClassName("react-flow__viewport react-flow__container"));
  var num = document.getElementsByClassName("react-flow__viewport react-flow__container");
console.log(num.length)
// document.getElementsByClassName("react-fdocument.getElementsByClassName("react-flow__viewport react-flow__container")low__viewport react-flow__container").style.transform = "rotate(7deg)"
  return (
    <div className="">
      <div className="flow-contain">
          <ReactFlow
            className="con"
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            panOnDrag={true}
            zoomOnScroll={false}
            zoomOnPinch={true}
            zoomOnDoubleClick={false}
            fitView
            
          ></ReactFlow>
      </div>
    </div>
    
  );
}

export default () => (
  <ReactFlowProvider>
    <LayoutFlow />
  </ReactFlowProvider>
);
