import {connect} from "react-redux";
import {fetchArticles} from "../../actions/articles";
import Search from "./Search";

const mapStateToProps = state => ({
  articles: state.articles && state.articles.list,
});
const mapDispatchToProps = dispatch => ({
  fetchArticles: query => dispatch(fetchArticles(query)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
