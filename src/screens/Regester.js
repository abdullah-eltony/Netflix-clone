import { Input } from "../components/UsedInputs";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const Regester = () => {
  return (
    <div className="container mx-auto px-2 my-24 flex-cols">
      <div className="w-full 2xl:w-2/5 flex-cols gap-8 p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
        <img
          src="/images/logo.png"
          alt="logo "
          className="w-full h-12 object-contain"
        />
        <Input
          label="Full Name"
          placeholder="john Doe"
          type="email"
          bg={true}
        />
        <Input
          label="Email"
          placeholder="netflixo.com"
          type="email"
          bg={true}
        />
        <Input label="Password" placeholder="*****" type="password" bg={true} />
        <Link
          to="/dashboard"
          className="w-full bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg"
        >
          <FiLogIn /> Sign Up
        </Link>
        <p className="text-center text-border">
        Already have an account? 
          <Link to="/login" className="text-dryGray font-semibold ml-2">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Regester;
