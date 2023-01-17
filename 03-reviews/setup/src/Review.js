import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ data }) => {
  let [index, setIndex] = useState(0);
  let { id, name, job, image, text } = data[index];

  // const randomPerson = () => {
  //   let randomNumber = Math.floor(Math.random() * people.length);
  //   if (randomNumber === index) {
  //     randomNumber = index + 1;
  //   }
  //   setIndex(checkNumber(randomNumber));
  // };

  const checkIndex = (newIndex) => {
    if (newIndex < 0) {
      return people.length - 1;
    } else if (newIndex > people.length - 1) {
      return 0;
    }
    return newIndex;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    setIndex((index) => {
      let randomNumber = Math.floor(Math.random() * people.length);
      if (randomNumber === index) {
        randomNumber += 1;
      }
      return checkIndex(randomNumber);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>
      <div>
        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
