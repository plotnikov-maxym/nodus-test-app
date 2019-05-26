import {connect} from "react-redux";
import TopBar from "./TopBar";

const mapStateToProps = state => ({
  isLoading: state.loading && state.loading.show,
});
export default connect(mapStateToProps)(TopBar);
