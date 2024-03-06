import React, { useState } from "react";
import Ratings from "./componenets/Ratings";
import "./App.css";

const MAX_RATING = 5;

function Card() {
  const [rating, setRating] = useState(null);
  const [showResult, setShowResult] = useState(false);

  function submitHandler() {
    setShowResult(true);
  }

  return (
    <main>
      {!showResult ? (
        <>
          <div className="star">
            <img src="svg/star.svg" alt="" />
          </div>
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <Ratings max={MAX_RATING} setter={(e) => setRating(e)} rating={rating} />
          <button onClick={submitHandler}>SUBMIT</button>
        </>
      ) : (
        <>
          <img src="svg/thank-you.svg" alt="" />
          <div className="result">You selected {rating} out of 5</div>
          <h2>Thank you!</h2>
          <span>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</span>
        </>
      )}
    </main>
  );
}

export default Card;
