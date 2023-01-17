import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  let [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>

        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
