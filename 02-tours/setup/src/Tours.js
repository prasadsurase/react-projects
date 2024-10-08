import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  const  { tours, removeTour } = props;

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
      </div>
      <div>
        {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  );
};

export default Tours;
