import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";

const defaultFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No user Found with the provided email");
          break;
        default:
          console.log(error);
      }
      if (error.code === "auth/wrong-password") {
        alert("Incorrect Passsword!!!");
      }
      console.log("User creation encountered an error: ", error);
    }
  };
  return (
    <div>
      <h1>Sign In with email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleOnChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleOnChange}
          name="password"
          value={password}
        />
        <Button type="button" buttonType="google" onClick={signInWithGoogle}>
          Google Sign In
        </Button>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
export default SignInForm;
