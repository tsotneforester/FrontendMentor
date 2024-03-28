import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SelectError() {
  const showSelectionError = useSelector((state) => state.showSelectionError);

  console.log(showSelectionError);
  return (
    <div className={`select-error ${showSelectionError ? "active" : ""}`}>
      <img src="assets/images/icon-error.svg" alt="" />
      <p>Please select an answer</p>
    </div>
  );
}
