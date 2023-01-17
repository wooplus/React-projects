import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Detail from "./Detail";
import { Employer } from "./Employer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  let [loading, setLoading] = useState(true);
  let [value, setValue] = useState(0);
  let [jobs, setJobs] = useState([]);

  let fetchData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h3 className="loading section">loading ...</h3>;
  }
  const { id, company, title, dates, duties } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h3>experience</h3>
        <div className="underline"></div>
      </div>
      <div className="job-info">
        <h3>{title}</h3>
        <p>{company}</p>
        <h4>{dates}</h4>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;
