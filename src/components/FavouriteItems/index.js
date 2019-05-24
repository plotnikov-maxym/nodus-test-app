import {connect} from "react-redux";
import FavouriteItems from "./FavouriteItems";
import {removeFromFavourites} from "../../actions/favourites";
import {fetchArticles} from "../../actions/articles";

const mapStateToProps = state => ({
  favourites: state.favourites,
});
const mapDispatchToProps = dispatch => ({
  fetchArticles: query => dispatch(fetchArticles(query)),
  removeFromFavourites: query => dispatch(removeFromFavourites(query)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavouriteItems);
