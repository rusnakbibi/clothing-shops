import { useState } from 'react';

import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from '../../utils';

import { FormInputComponent } from '../FormInput';
import { ButtonComponent } from '../Button';

import './SignInForm.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          alert(
            "It looks like the sign-in process was interrupted. If you closed the pop-up window by mistake, please try signing in again. If you're experiencing issues with the sign-in process, feel free to reach out to us for assistance or try a different sign-in method. Your security and ease of access are important to us!"
          );
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signInUserWithEmailAndPassword(email, password);
      if (res) {
        resetFormFields();
      }
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert(
            "We couldn't find an account associated with this email address"
          );
          break;
        case 'auth/wrong-password':
          alert('Incorrect password for account');
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComponent
          label="Email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />

        <FormInputComponent
          label="Password"
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />

        <div className="buttons-container">
          <ButtonComponent type="submit">Sign In</ButtonComponent>
          <ButtonComponent
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
          >
            Google sign in
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
