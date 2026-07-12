import LoginForm from "../components/form/LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full p-4 flex flex-col items-start justify-center bg-[#fefffe] h-full px-8">
      <h2 className="text-primary font-bold text-2xl tracking-wide mt-16">
        Welcome Back
      </h2>
      <p>Please enter your details to access your dashboard.</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
