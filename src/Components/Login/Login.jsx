import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import { BsGoogle } from "react-icons/bs";
import { BiLogoGithub } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoginError("");
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoginError(error.code);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div className="flex justify-center mt-14 md:mt-20 lg:mt-28 px-5 md:px-0">
      <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        className="relative flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-20 md:h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#FFA828] to-[#FF4804] bg-clip-border text-white shadow-lg shadow-[#FFA828]/40">
          <h3 className="block font-sans text-xl md:text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            Login your account
          </h3>
        </div>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="email"
                name="email"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#FFA828] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                required
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#FFA828] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#FFA828] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email address
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                name="password"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#FFA828] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                required
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FFA828] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#FFA828] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#FFA828] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
            <div className="-ml-2.5">
              {loginError && (
                <h1 className="text-red-500 px-5">{loginError}</h1>
              )}
            </div>
          </div>
          <div className="p-6 pt-0">
            <button
              className="normal-case block w-full select-none rounded-lg bg-gradient-to-tr from-[#FFA828] to-[#FF4804] py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-[#FFA828]/20 transition-all hover:shadow-lg hover:shadow-[#FFA828]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true">
              Login
            </button>
          </div>
        </form>
        <h1 className="text-center font-medium text-lg -my-4">or</h1>
        <div className="flex flex-col space-y-2 px-6 mt-5">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-info normal-case">
            <BsGoogle></BsGoogle>Login With Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="btn btn-outline normal-case">
            <BiLogoGithub className="text-lg"></BiLogoGithub>Login With Github
          </button>
        </div>
        <p className="my-4 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
          Don't have an account?
          <Link
            to="/resister"
            className="ml-1 block font-sans text-sm font-bold leading-normal text-[#FFA828] antialiased">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
