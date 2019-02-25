import React from "react";
import { ASP_PropAccess } from "terser";
export default function Tile(props) {
  return (
    <div className="tile" onClick={() => props.handleTileClick(props.id)}>
      {props.char}
    </div>
  );
}
