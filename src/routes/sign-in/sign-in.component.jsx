import {
  signInWithGooglePopup,
  createUserFromSignIn,
} from "../../utils/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserFromSignIn(user);
  };

  return (
    <div>
      <h1>SignIN</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
