import React from "react";

import "./scss/main.scss";

import Header from "./containers/Header";
import MainPage from "./containers/MainPage";

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
