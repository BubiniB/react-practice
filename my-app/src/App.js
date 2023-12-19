import React from "react";
import "./App.css";
// import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";

function App() {
  return (
    <div className="App">
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;