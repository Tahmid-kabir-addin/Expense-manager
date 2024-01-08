import AuthForm from '../components/auth/AuthForm';
import authStyles from '../styles/auth.css';

const AuthenticationPage = () => {
  return (
    <>
      <AuthForm />
    </>
  )
}

export default AuthenticationPage

export function links() {
  return [{rel: 'stylesheet', href: authStyles}];
}
