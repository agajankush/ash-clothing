import {
  signInWithGooglePopup,
  createUserFromSignIn,
} from "../../utils/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = createUserFromSignIn(user);
    console.log(userRef);
  };

  return (
    <div>
      <h1>SignIN</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
