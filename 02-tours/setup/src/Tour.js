import React, { useState } from 'react';

const Tour = (props) => {
  const {id, name, info, image, price, removeTour} = props;

  const[readMore, setReadMore] = useState(true);

  const displayInfo = () => {
    if(readMore) {
      return info.substring(0, 200) + '...';
    } else {
      return info;
    }
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {displayInfo()}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'read more' : 'show less'}</button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
