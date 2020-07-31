import SignInForm from "../components/SignIn/SignInForm";
import { connect } from "react-redux";
import { signIn } from "../actions/userAction";

const mapDispathToProps = (dispatch) => {
  return { signIn: (user) => dispatch(signIn(user)) };
};

const SignIn = connect(null, mapDispathToProps)(SignInForm);
export default SignIn;
