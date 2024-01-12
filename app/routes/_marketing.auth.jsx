import AuthForm from "../components/auth/AuthForm";
import authStyles from "../styles/auth.css";

const AuthenticationPage = () => {
  return (
    <>
      <AuthForm />
    </>
  );
};

export default AuthenticationPage;

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}

export function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  if (authMode === "login") {
    // login logic
  } else {
    // signup logic
  }
}
