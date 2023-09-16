
import Image from "next/image";
import { FaUser, FaLock, FaFacebookF, FaLinkedinIn, FaTwitter, FaGoogle } from "react-icons/fa";
import img from "../../img/login.png";

export default function Login() {
  return (
    <>
      <div className='bg-gradient-to-r from-green-300 via-yellow-50 to-green-300 block h-screen items-center justify-center p-1 md:flex'>
        {/* login card */}
        <div className=" bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row font-sans">

          <Image
            src={img}
            alt="login" width="550" height="400">
          </Image>

          {/* Form */}
          <div className="h-full from-green-300 flex flex-col items-center p-8 w-full md:w-1/2">
            {/* Welcome */}
            <div className="flex flex-col items-center space-y-2 pb-0 ">
              <h1 className="font-medium text-green-400 text-3xl "> Welcome back</h1>
              <p className=" text-lg pb-8">Login to your account</p>
            </div>

            {/* Inputs */}
            <form className="flex flex-col items-center space-y-3">
              <div className="relative pb-3">
                <span className="absolute flex inset-y-0 items-center pl-4 pb-3 text-gray-400"> <FaUser /> </span>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 px-2 py-3 rounded-md transition focus:ring-2 focus:ring-green-400" placeholder="Username....." type="text" />
              </div>
              <div className="relative pb-3">
                <span className="absolute flex inset-y-0 items-center pl-4 pb-3 text-gray-400"> <FaLock /> </span>
                <input className="border boder-gray-300 outline-none placeholder-gray-400 pl-16 pr-3 py-3 rounded-md transition focus:ring-2 focus:ring-green-400" placeholder="Password....." type="password" />
              </div>
              <button className="bg-green-400 font-medium inline-flex items-center px-7 py-2 rounded-md text-white transition hover:bg-green-500" type="submit">
                Login
              </button>
              <div className="flex justify-between w-64 mb-3 pt-3">
                <label className="flex items-center text-xs accent-green-500"><input className="mr-1" type="checkbox" name="remember" />Remember me</label>
                <a href="#" className="text-xs">Forget password?</a>
              </div>

              {/* Links */}
              <div className="flex justify-center my-2 pt-3">
                <a href="#" className="border-2 border-gray-950 rounded-full p-3 mx-1 hover:bg-green-500">
                  <FaFacebookF className="text-sm fill-gray-950" />
                </a>
                <a href="#" className="border-2 border-gray-950 rounded-full p-3 mx-1 hover:bg-green-500">
                  <FaLinkedinIn className="text-sm fill-gray-950" />
                </a>
                <a href="#" className="border-2 border-gray-950 rounded-full p-3 mx-1 hover:bg-green-500">
                  <FaTwitter className="text-sm fill-gray-950" />
                </a>
                <a href="#" className="border-2 border-gray-950 rounded-full p-3 mx-1 hover:bg-green-500">
                  <FaGoogle className="text-sm fill-gray-950" />
                </a>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}
