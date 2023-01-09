import React from "react";
import html2canvas from "html2canvas";
import Canvas from "./Canvas";
import "./WhiteBoard.css";

function Screenshot() {
  const printPDF = () => {
    const domElement = document.getElementById("root");
    html2canvas(domElement, {
      onclone: (document) => {
        document.getElementById("print").style.visibility = "hidden";
      },
    }).then((canvas) => {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "chart.png";
      link.href = url;
      link.click();
    });
  };

  return (
    <>
      <button className="btn btn-info" id="print" onClick={printPDF}>
        Click to Download and Share.
      </button>
      <Canvas />
    </>
  );
}

export default Screenshot;
