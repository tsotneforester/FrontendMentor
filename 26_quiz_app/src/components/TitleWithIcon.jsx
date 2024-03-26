import React from "react";

export default function TitleWithIcon({ data }) {
  return (
    <div className="title-with-icon">
      <div
        style={{
          backgroundColor: data.color,
        }}
        className="icon-frame">
        <div className="icon">
          <img src={data.icon} alt="icon" />
        </div>
      </div>

      <h1>{data.title}</h1>
    </div>
  );
}
