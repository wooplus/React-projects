import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  let [loading, isLoading] = useState(true);
  let [error, isError] = useState(false);
  let [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      isLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setTours(data);
      isLoading(false);
    } catch (error) {
      isLoading(false);
      isError(true);
    }
  };

  useEffect(() => {
    fetchTours();
  });
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        Too many requests from this IP, please try again after 15 minutes.
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours}></Tours>
    </div>
  );
}

export default App;
