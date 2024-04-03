import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

import { googleSignInStart, emailSignInStart } from 'actions/user';
import { BUTTON_TYPE_CLASSES } from 'enum/buttonType';

import { FormInputComponent } from '../FormInput';
import Button from '../Button/Button.component';

import { SignInContainer, ButtonsContainer } from './SignInForm.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      dispatch(googleSignInStart());
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.POPUP_CLOSED_BY_USER:
          alert(
            "It looks like the sign-in process was interrupted. If you closed the pop-up window by mistake, please try signing in again. If you're experiencing issues with the sign-in process, feel free to reach out to us for assistance or try a different sign-in method. Your security and ease of access are important to us!"
          );
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.USER_DELETED:
          alert(
            "We couldn't find an account associated with this email address"
          );
          break;
        case AuthErrorCodes.INVALID_PASSWORD:
          alert('Incorrect password for account');
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleSubmit}>
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

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
