import React from "react";
import { useContext } from "react";
import { DataContext } from "../index";

export default function SelectError() {
  const { showSelectionError } = useContext(DataContext);
  console.log(showSelectionError);
  return (
    <div className={`select-error ${showSelectionError ? "active" : ""}`}>
      <img src="assets/images/icon-error.svg" alt="" />
      <p>Please select an answer</p>
    </div>
  );
}
