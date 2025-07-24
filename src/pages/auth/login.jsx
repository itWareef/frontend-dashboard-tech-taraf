import LoginForm from "@/components/layout/auth/LoginForm";
import LoginImg from "../../assets/Taraf_Login.png";

const Login = () => {
  return (
    <div className="min-h-screen  flex">
      {/* Left Column - Image */}
      <div className="flex-1 relative hidden lg:block">
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 bg-[#013B41] opacity-50"></div>
          <img
            src={LoginImg}
            alt="Taraf"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-card ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
