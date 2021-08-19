import React, { useContext } from "react";
import ColorContext from "../context/ColorContext";

import SingleColor from "./SingleColor";

const ColorList = () => {
  const { state } = useContext(ColorContext);

  return (
    <div className="grid grid-cols-2 auto-rows-3fr	w-full md:grid-cols-3 lg:grid-cols-4	xl:grid-cols-6 2xl:grid-cols-6">
      {state.list.map((color, index) => {
        return (
          <div key={index}>
            <SingleColor color={color} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default ColorList;
