import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {id, name, job, image, text} = people[index];

  const getReview = (indx) => {
    if(indx < 0 || indx > people.length) {
      return null;
    } else {
      setIndex(indx);
    }
  };

  const setRandom = () => {
    const min = Math.ceil(0);
    const max = Math.floor(people.length - 1);
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setIndex(randomNumber);
  };

  const renderPrevButton = () => {
    if(index === 0) {
      return null
    } else {
      return (
        <button className="prev-btn" onClick={() => getReview(index - 1)}>
          <FaChevronLeft />
        </button>
      );
    }
  };

  const renderNextButton = () => {
    if(index === people.length - 1) {
      return null
    } else {
      return (
        <button className="next-btn" onClick={() => getReview(index + 1)}>
          <FaChevronRight />
        </button>
      );
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        {renderPrevButton()}
        {renderNextButton()}
      </div>
      <button className="random-btn" onClick={() => setRandom()}>surprise me</button>
    </article>
  );
};

export default Review;
