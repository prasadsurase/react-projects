import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {title, info} = props;
  const [active, setActive] = useState(false);

  const renderButton = () => {
    if(active) {
      return (
        <button className="btn" onClick={() => setActive(false)}>
          <AiOutlineMinus />
        </button>
      );
    } else {
      return (
        <button className="btn" onClick={() => setActive(true)}>
          <AiOutlinePlus />
        </button>
      );
    }
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {renderButton()}
      </header>
      { active && <p>{info}</p> }
    </article>
  );
};

export default Question;
