import {connect} from "react-redux";
import {fetchArticles} from "../../actions/articles";
import {addToFavourites} from "../../actions/favourites";
import {infoNotification} from "../../actions/notifications";
import Search from "./Search";

const mapDispatchToProps = dispatch => ({
  fetchArticles: query => dispatch(fetchArticles(query)),
  addToFavourites: query => dispatch(addToFavourites(query)),
  infoNotification: message => dispatch(infoNotification(message)),
});
export default connect(
  () => ({}),
  mapDispatchToProps,
)(Search);
