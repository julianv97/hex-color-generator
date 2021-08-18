import React, { useReducer } from "react";

import ColorContext from "./ColorContext";
import reducer from "./ColorReducer";

const ColorState = (props) => {
  const defaultState = {
    color: "#f15025",
    list: [],
    error: false,
    alert: false,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleDispatch = (type, payload) => {
    dispatch({
      type: type,
      payload: payload,
    });
  };

  return (
    <ColorContext.Provider value={{ state, handleDispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
