import React, { useState } from "react";
import "./App.scss";

import ToDoParent from "./components/ToDo/ToDoParent";

const App: React.FC = () => {
  return (
    <div className="app--container">
      <ToDoParent />
    </div>
  );
};

export default App;
