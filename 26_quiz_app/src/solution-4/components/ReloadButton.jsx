import React from "react";

export default function ReloadButton({}) {
  return (
    <div
      className="purple-button"
      onClick={() => {
        location.reload();
      }}>
      <p>play again</p>
    </div>
  );
}
