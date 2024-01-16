import { SignUpForm, SignInForm } from '../../components';

import { AuthenticationContainer } from './Authentication.styles.jsx';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
