import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./auth.styles.scss";

const Auth = () => {
  useEffect(() => {
    async function fetchData() {
      const { user } = await getRedirectResult(auth);
      createUserDocumentFromAuth(user);
    }
    fetchData();
  }, []);

  return (
    <div className="'authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
