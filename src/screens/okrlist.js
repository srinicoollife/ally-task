import React, { useEffect } from "react";
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// actions
import {
  startLoader,
  stopLoader,
  setOkrResults,
} from "../container/actions/action";
// components
import Accordion from "../components/accordion/accordion";
import BadgeFilter from "../components/badgefilter/badgefilter";
// utils
import { get_okrs_endpoint } from "../utils/consts";
import { getCall, format_okr_results } from "../utils/helper";

const OkrList = ({
  loading,
  okr_list,
  okr_filters,
  startLoader,
  stopLoader,
  setOkrResults,
}) => {
  useEffect(() => {
    startLoader();
    getOkrData();
  }, []);

  const getOkrData = async () => {
    let res = await getCall(get_okrs_endpoint);
    if (res.ok) {
      res.json().then((res) => {
        let formated_data = format_okr_results(res.data);
        setTimeout(() => {
          setOkrResults(formated_data);
          stopLoader();
        }, 1000);
      });
    }
  };
  return (
    <div>
      <BadgeFilter />
      {okr_list.map(
        (line_item) =>
          okr_filters[line_item.category] && (
            <Accordion key={line_item.id} data={line_item} />
          )
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { app } = state;
  const { loading, okr_list, okr_filters } = app;
  return { loading, okr_list, okr_filters };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      startLoader,
      stopLoader,
      setOkrResults,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OkrList);
