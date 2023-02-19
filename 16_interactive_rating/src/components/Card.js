import React, { useState, useEffect } from "react";
import "./style.css";
import star from "./assets/star.png";
import mobile from "./assets/mobile.png";

const data = [1, 2, 3, 4, 5];

function Star() {
  return (
    <div className="star">
      <img src={star} alt="" />
    </div>
  );
}

function Mobile() {
  return <img className="mobile" src={mobile} alt="" />;
}

function Ratings(props) {
  const names = props.name;
  const handler = props.handler;
  const rating = props.rating;
  return (
    <div className="bubble-box">
      {names.map((number, id) => {
        return (
          <div
            key={id}
            className={number == rating ? "rating-bubble active" : "rating-bubble"}
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

function RatingText(props) {
  const rating = props.rating;
  return <div className="result">You selected {rating} out of 5</div>;
}

function Card() {
  const [rating, setRating] = useState("X");
  const [resultShown, setResultShown] = useState(false);
  const [isActive, setIsActive] = useState("");

  function handler(e) {
    setRating(e);
    setIsActive("active");
    console.log(e);
  }

  function submitHandler() {
    setResultShown(true);
  }

  return (
    <main>
      {!resultShown && <Star />}
      {!resultShown && <h1>How did we do?</h1>}
      {!resultShown && <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>}
      {!resultShown && <Ratings name={data} handler={handler} rating={rating} />}
      {!resultShown && <button onClick={submitHandler}>SUBMIT</button>}
      {resultShown && <Mobile />}
      {resultShown && <RatingText rating={rating} />}
      {resultShown && <h2>Thank you!</h2>}
      {resultShown && <span>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</span>}
    </main>
  );
}

export default Card;
