import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firabase';

import { SignUpFormComponent } from '../../components';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignUpFormComponent />
    </div>
  );
};

export default SignIn;
