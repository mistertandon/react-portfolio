import React from "react";
import "./App.scss";

import TaskParent from "./components/todo/TaskParent";

const App: React.FC = () => {
  return (
    <div className="app--container">
      <TaskParent />
    </div>
  );
};

export default App;
