import React from "react";
import CalcPage from "./pages/CalcPage/CalcPage";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <CalcPage />
      </main>
    </div>
  );
};

export default App;
