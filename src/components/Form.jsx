import React, { useContext } from "react";
import ColorContext from "../context/ColorContext";

const Form = () => {
  const { state, handleDispatch } = useContext(ColorContext);
  return (
    <form
      className="inline-flex flex-col md:flex-row w-full md:items-center pb-6 h-full items-center  pl-4  pt-5 "
      onSubmit={(e) => handleDispatch("FORM_SUBMIT", e)}
    >
      <div className="h-full flex items-center ">
        <label className="capitalize pr-4 text-xl font-semibold ">
          hex color generator
        </label>
      </div>

      <div className="flex items-center pr-6">
        <div className=" relative rounded-md shadow-sm pr-2">
          <input
            type="text"
            className={`${
              state.error ? " border-red-500 " : " border "
            } block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-gray-900 `}
            placeholder="#f15025"
            onChange={(e) => handleDispatch("SET_COLOR", e.target.value)}
            style={{ borderColor: state.color }}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 hover:border-blue-500 rounded capitalize">
          search
        </button>
      </div>
      {state.error && (
        <div
          className="bg-red-100 border h-full border-red-400 text-red-700 px-4 mt-5 md:mt-0 py-1 w-36 md:w-36 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Try another! </strong>

          <span class="absolute top-0 bottom-0 right-0  py-1">
            <svg
              className="fill-current h-6 w-6 pr-1 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => handleDispatch("CLOSE_ERROR_ALERT")}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
    </form>
  );
};

export default Form;
