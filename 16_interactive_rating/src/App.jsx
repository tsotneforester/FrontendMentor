import React, { useState, useEffect } from "react";
import "./App.css";
import { ReactComponent as StarIcon } from "./assets/star.svg";
import { ReactComponent as ThanksIcon } from "./assets/thank-you.svg";

const data = [1, 2, 3, 4, 5];

function Card() {
  const [rating, setRating] = useState();
  const [showResult, setShowResult] = useState(false);

  function handler(e) {
    setRating(e);
  }

  function submitHandler() {
    setShowResult(true);
  }

  return (
    <main>
      {showResult ? (
        <>
          <ThanksIcon />
          <div className="result">You selected {rating} out of 5</div>
          <h2>Thank you!</h2>
          <span>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</span>
        </>
      ) : (
        <>
          <Star />
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <Ratings name={data} handler={handler} rating={rating} />
          <button onClick={submitHandler}>SUBMIT</button>
        </>
      )}
    </main>
  );
}

export default Card;

function Star() {
  return (
    <div className="star">
      <StarIcon />
    </div>
  );
}

function Ratings({ name, handler, rating }) {
  return (
    <div className="bubble-box">
      {name.map((number, id) => {
        return (
          <div
            key={id}
            className={`rating-bubble ${number == rating ? "active" : ""}`}
            onClick={() => {
              handler(number);
            }}>
            {number}
          </div>
        );
      })}
    </div>
  );
}
