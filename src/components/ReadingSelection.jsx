import React from "react";

function ReadingSelection() {
    return (
        <select className="select-reading">
          <option value="one-card">1 card reading</option>
          <option value="three-cards">3 card reading</option>
          <option value="ten-cards">10 card reading</option>
        </select>
    )
};

export default ReadingSelection;