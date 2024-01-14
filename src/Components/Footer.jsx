import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="">
            <span className=" text-fuchsia-800 text-3xl font-semibold py-2 uppercase">Logo</span>
            <p className="text-[18px] my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero praesentium cupiditate, optio id nesciunt quia debitis nostrum blanditiis aperiam tempora!</p>
        </div>
        <div>
          <h2 className="text-fuchsia-800 text-[22px] font-semibold py-2 uppercase">Services</h2>
            <ul className=" text-[18px] my-4">
              <li className=" my-2">Web Design</li>
              <li className=" my-2">Web Development</li>
              <li className=" my-2">React App</li>
              <li className=" my-2">E-commerce</li>
            </ul>
        </div>
        <div>
          <h2 className="text-fuchsia-800 text-[22px] font-semibold py-2 uppercase">Contact</h2>
          <p className="text-[16px] my-4">Email: yougmail@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +08801688945899</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
          <div className="flex space-x-4">
              <a className=" text-white hover:text-fuchsia-600 transition-all duration-150 ease-in-out cursor-pointer"><AiFillGithub/></a>
                <a className=" text-white hover:text-fuchsia-600 transition-all duration-150 ease-in-out cursor-pointer"> <FaLinkedinIn /></a>
                <a className=" text-white hover:text-fuchsia-600 transition-all duration-150 ease-in-out cursor-pointer"><FaFacebookF /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer