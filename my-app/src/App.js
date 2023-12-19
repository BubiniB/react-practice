import React from "react";
import "./App.css";
// import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
// import EventsClass from "./components/EventsClass";
// import EventsFunctional from "./components/EventsFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";

function App() {
  return (<div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true}/>
  </div>);
}

export default App;