import React from "react";
import ColorList from "./components/ColorList";

import ColorState from "./context/ColorState";

function App() {
  return (
    <ColorState>
      <ColorList />
    </ColorState>
  );
}

export default App;
