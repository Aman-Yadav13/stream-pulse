import { Logo } from "./_components/logo";
// import "./styles.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6 auth-gradient">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
