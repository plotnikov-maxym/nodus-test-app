import {combineReducers} from "redux";
import articles from "./articles";
import favourites from "./favourites";
import loading from "./loading";
import notifications from "./notifications";

export default combineReducers({
  articles,
  favourites,
  loading,
  notifications,
});
