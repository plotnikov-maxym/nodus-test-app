import {connect} from "react-redux";
import Notification from "./Notification";

const mapStateToProps = state => ({
  notification: state.notifications,
});
export default connect(mapStateToProps)(Notification);
