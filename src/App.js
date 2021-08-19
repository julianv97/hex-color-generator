import React from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";

import ColorState from "./context/ColorState";

function App() {
  return (
    <ColorState>
      <div className="w-full h-full min-h-screen ">
        <Form />
        <ColorList />
      </div>
    </ColorState>
  );
}

export default App;
