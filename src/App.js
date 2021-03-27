import React, { useState } from "react";
import FooBar from "./components/fooBar";
import Question1 from "./components/question1";
import Weather from "./components/weather";

function App() {
  const [page, setPage] = useState("weather");

  //data for problem 1
  let rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 },
  ];

  return (
    <div className="app">
      {/* ------------------------------------------------------------------------- Simple nav-bar */}
      <div className="app_navigation">
        <p className="app_navigation_links" onClick={() => setPage("weather")}>
          Weather App
        </p>
        <p
          className="app_navigation_links"
          onClick={() => setPage("problem-1")}
        >
          Question 1: Render
        </p>
        <p
          className="app_navigation_links"
          onClick={() => setPage("problem-2")}
        >
          Question 2: foo-bar
        </p>
      </div>
      {/* ------------------------------------------------------------------------- App features */}
      <div className="container">
        {page === "weather" && <Weather />}
        {page === "problem-1" && <Question1 rooms={rooms} />}
        {page === "problem-2" && <FooBar />}
      </div>
    </div>
  );
}

export default App;
