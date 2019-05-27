import {connect} from "react-redux";
import Articles from "./Articles";
import {fetchAbstract} from "../../actions/articles";

const mapStateToProps = state => ({
  articles: state.articles && state.articles.list,
});

const mapDispatchToProps = dispatch => ({
  fetchAbstract: (pmid, index) => dispatch(fetchAbstract(pmid, index)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
