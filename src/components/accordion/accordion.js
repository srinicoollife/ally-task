import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({ data }) => {
  const { title, children, category } = data;
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <button className="title" onClick={() => setIsActive(!isActive)}>
        {isActive && <i className="fa fa-caret-down"></i>}
        {!isActive && <i className="fa fa-caret-up"></i>}
        <i className="fa fa-user"></i>
        {title} (Cateogry: {category})
      </button>
      {isActive && (
        <div className="panel">
          {children.map((line_item) => {
            return (
              <div className="panel-item" key={line_item.id}>
                <i className="fa fa-user"></i>
                {line_item.title}
              </div>
            );
          })}
          {children.length === 0 && (
            <div className="panel-item">no data found under this title</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
