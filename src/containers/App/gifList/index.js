import { connect } from "react-redux";
import { compose } from "redux";
import GifList from "./gifList";
import { getCategoryList, getSearchList } from "./action";

const mapDispatchToProps = (dispatch) => ({
  getCategoryList: (...args) => dispatch(getCategoryList(...args)),
  getSearchList: (...args) => dispatch(getSearchList(...args)),
});

const mapStateToProps = (state) => {
  return {
    listData: state.gifList.list,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(GifList);
