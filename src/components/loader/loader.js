import "./loader.css";
import { connect } from "react-redux";

const Loader = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { app } = state;
  const { loading } = app;
  return { loading };
};

export default connect(mapStateToProps, {})(Loader);
