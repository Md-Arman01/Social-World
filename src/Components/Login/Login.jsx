import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#97245F] to-[#97245F] bg-clip-border text-white shadow-lg shadow-[#97245F]/40">
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            Login your account
          </h3>
        </div>
        <form>
        <div className="flex flex-col gap-4 p-6">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type='email'
              name="email"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#97245F] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeHolder=" "
              required
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#97245F] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#97245F] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#97245F] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email address
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="password"
              name="password"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#97245F] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeHolder=" "
              required
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#97245F] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#97245F] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#97245F] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
          </div>
          <div className="-ml-2.5">
            <h1 className="text-red-500 px-5">password not match</h1>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            className="normal-case block w-full select-none rounded-lg bg-gradient-to-tr from-[#97245F] to-[#97245F] py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-[#97245F]/20 transition-all hover:shadow-lg hover:shadow-[#97245F]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true">
            Login
          </button>
          <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
            Don't have an account?
            <Link
              to="/resister"
              className="ml-1 block font-sans text-sm font-bold leading-normal text-[#97245F] antialiased">
              Register
            </Link>
          </p>
        </div>
        </form>
      </div>
    </div>

    );
};

export default Login;