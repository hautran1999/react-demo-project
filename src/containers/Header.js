import Navigation from "../components/Navigation/Navigation";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { user: state.user };
};

const Header = connect(mapStateToProps)(Navigation);
export default Header;
