import React, { useContext, useEffect, useState } from "react";
import ColorContext from "../context/ColorContext";

import rgbToHex from "../context/utils";

const SingleColor = ({ color, index }) => {
  const { rgb, weight } = color;
  const [alert, setAlert] = useState(false);
  const { handleDispatch } = useContext(ColorContext);

  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className={`${
        index > 10 ? "text-gray-200" : "text-base"
      } h-full  cursor-pointer`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        handleDispatch("COPY_TO_CLIPBOARD", hex);
        setAlert(true);
      }}
    >
      <div className="flex flex-col pl-6 pt-4">
        <span> {weight}% </span>
        <span> {hex} </span>
        {alert && (
          <p
            className={`${
              index > 10 ? "text-gray-200" : "text-gray-800"
            } uppercase pt-4`}
          >
            copied to clipboard
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleColor;
