import React from "react";
import { useContext } from "react";
import { DataContext } from "../index";

export default function TitleWithIcon() {
  const { data, titleIndex } = useContext(DataContext);

  const { color, icon, title } = data[titleIndex];
  return (
    <div className="title-with-icon">
      <div
        style={{
          backgroundColor: color,
        }}
        className="icon-frame">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
      </div>

      <h1>{title}</h1>
    </div>
  );
}
