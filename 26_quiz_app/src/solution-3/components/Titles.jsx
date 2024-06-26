import React from "react";
import { useContext } from "react";
import { DataContext } from "../index";

export default function Titles() {
  const { data, dispatch } = useContext(DataContext);
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
