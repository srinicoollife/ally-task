import React, { useState } from "react";
import "./badgefilter.css";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// actions
import {
  startLoader,
  stopLoader,
  updateOkrFilterStatus,
} from "../../container/actions/action";

const BadgeFilter = ({
  okr_filters,
  updateOkrFilterStatus,
  startLoader,
  stopLoader,
}) => {
  const filters = Object.keys(okr_filters);

  return (
    <div className="badge-container">
      {filters.length > 0 && <p className="filter-title">Category Filter</p>}
      {filters.map((filter) => (
        <Badge
          title={filter}
          key={filter}
          status={okr_filters[filter]}
          updateOkrFilterStatus={updateOkrFilterStatus}
          startLoader={startLoader}
          stopLoader={stopLoader}
        />
      ))}
    </div>
  );
};

const Badge = ({
  title,
  status,
  updateOkrFilterStatus,
  startLoader,
  stopLoader,
}) => {
  const [isActive, setisActive] = useState(status);
  const style = `badge ${isActive ? "active" : ""}`;

  return (
    <div
      className={style}
      onClick={() => {
        startLoader();
        setisActive(!isActive);
        updateOkrFilterStatus(title);
        setTimeout(() => {
          stopLoader();
        }, 500);
      }}
    >
      {title}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { app } = state;
  const { okr_filters } = app;
  return { okr_filters };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      startLoader,
      stopLoader,
      updateOkrFilterStatus,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BadgeFilter);
