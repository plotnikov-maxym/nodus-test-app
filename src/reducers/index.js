import {combineReducers} from "redux";
import articles from "./articles";
import favourites from "./favourites";

export default combineReducers({
  articles,
  favourites,
});
