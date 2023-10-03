import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration </title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}


// helmet- окрема бібліотека яка робить захист від атак XSS