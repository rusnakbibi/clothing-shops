import { SignUpFormComponent, SignInComponent } from '../../components';

import './Authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInComponent />
      <SignUpFormComponent />
    </div>
  );
};

export default Authentication;
