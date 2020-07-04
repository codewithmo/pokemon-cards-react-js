import React, { Component } from "react";
import "./Refresh.css";

function Refresh() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="Refresh">
      <button onClick={refreshPage} className="Refresh-btn">
        Try Again!
      </button>
    </div>
  );
}

export default Refresh;
