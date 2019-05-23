import {connect} from "react-redux";
import Articles from "./Articles";

const mapStateToProps = state => ({
  articles: state.articles && state.articles.list,
});
export default connect(mapStateToProps)(Articles);
