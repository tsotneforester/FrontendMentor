import React from "react";
import { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";

export default function Titles() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <>
      {data.map((e, i) => {
        return (
          <button
            key={i}
            className="title-choise"
            onClick={() => {
              dispatch({
                type: "titleSet",
                payload: i,
              });
            }}>
            <div className="title-with-icon">
              <div
                style={{
                  backgroundColor: e.color,
                }}
                className="icon-frame">
                <div className="icon">
                  <img src={e.icon} alt="icon" />
                </div>
              </div>

              <h1>{e.title}</h1>
            </div>
          </button>
        );
      })}
    </>
  );
}
