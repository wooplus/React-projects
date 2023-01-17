import React, { useState, useEffect } from "react";
import { FaGithubSquare } from "react-icons/fa";
import reviews from "./data";
import Review from "./Review";
function App() {
  let [data, setData] = useState(reviews);

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review data={data} />
      </section>
    </main>
  );

  // return (
  //   <main>
  //     <section className="container">
  //       <div className="title">
  //         <h2>our reviews</h2>
  //         <div className="underline"></div>
  //       </div>
  //       <Review data={data} />
  //     </section>
  //   </main>
  // );
}

export default App;
