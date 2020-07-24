import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInputChange = (e) => setEmail(e.target.value);
  const handlePasswordInputChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          required
          handleChange={(e) => handleEmailInputChange(e)}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          required
          handleChange={(e) => handlePasswordInputChange(e)}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
