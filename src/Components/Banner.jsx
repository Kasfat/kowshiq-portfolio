
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import img from './../assets/Images/img1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Banner() {
   
        AOS.init({
            easing: "ease-in-quart",
            delay: 0,
            duration: 750
        });
   
    
  return (
    <div className='flex lg:px-56 px-10 lg:py-0 py-20 gap-5 lg-text-start lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
        <div className='text-white h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
            <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Welcome To <span className='text-fuchsia-500'>My Website</span></h1>
            <p data-aos="fade-left" className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium autem itaque fugiat, dignissimos pariatur ducimus voluptate, iure cupiditate nihil molestias magnam minima temporibus tempora corporis. Illo quaerat enim porro.</p>
            <div className='flex mt-8 gap-2'>
                <div data-aos="fade-up" className='flex items-center justify-center'>
                    <div className=" flex space-x-2">
                    <a href='' className=' text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <AiFillGithub className=" text-[24px]"/>
                    </a>
                    <a href='' className=' text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <FaLinkedinIn className=" text-[24px]"/>
                    </a>
                    <a href='' className=' text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <FaFacebookF className=" text-[24px]"/>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img data-aos="fade-up" src={img} width={400} height={400} className=" rounded-full border-2 p-1 border-fuchsia-500 img_glow"/>
        </div>
    </div>
  )
}

export default Banner