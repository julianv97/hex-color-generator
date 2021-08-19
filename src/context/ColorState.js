import React, { useReducer } from "react";

import ColorContext from "./ColorContext";
import reducer from "./ColorReducer";

import Values from "values.js";

const ColorState = (props) => {
  const defaultState = {
    color: "",
    list: new Values("#f15025").all(10),
    error: false,
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
