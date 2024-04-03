import { SignUpForm, SignInForm } from '../../components';

import { AuthenticationContainer } from './Authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
