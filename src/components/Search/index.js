import {connect} from "react-redux";
import {fetchArticles} from "../../actions/articles";
import {addToFavourites} from "../../actions/favourites";
import Search from "./Search";

const mapDispatchToProps = dispatch => ({
  fetchArticles: query => dispatch(fetchArticles(query)),
  addToFavourites: query => dispatch(addToFavourites(query)),
});
export default connect(
  () => ({}),
  mapDispatchToProps,
)(Search);
