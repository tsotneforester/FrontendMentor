import React from "react";

export default function SelectError({ showSelectionError }) {
  return (
    <div className={`select-error ${showSelectionError ? "active" : ""}`}>
      <img src="assets/images/icon-error.svg" alt="" />
      <p>Please select an answer</p>
    </div>
  );
}
