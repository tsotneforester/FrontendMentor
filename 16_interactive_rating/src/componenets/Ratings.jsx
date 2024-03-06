import React from "react";

function Ratings({ max, setter, rating }) {
  let temp = Array.from({ length: max }, (_, i) => {
    return i + 1;
  });
  return (
    <div className="bubble-box">
      {temp.map((number, id) => {
        return (
          <div
            key={id}
            className={`rating-bubble ${number == rating && "active"}`}
            onClick={() => {
              setter(number);
            }}>
            {number}
          </div>
        );
      })}
    </div>
  );
}

export default Ratings;
