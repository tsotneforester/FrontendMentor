import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TitleWithIcon() {
  const data = useSelector((state) => state.data);
  const titleIndex = useSelector((state) => state.titleIndex);

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
