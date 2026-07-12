import RegisterForm from "../components/form/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="w-full p-4 flex flex-col items-start justify-center bg-[#fefffe] h-full px-8">
      <h2 className="text-primary font-bold text-2xl tracking-wide mt-16">
        Start your Journey
      </h2>
      <p>Create your ScholarHub profile and start matching with grants today.</p>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
