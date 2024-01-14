import img from './../assets/Images/img1.jpg';

function About() {
  return (
    <div id="About" className="">
        <div className='flex lg:px-56 px-10 lg:py-0 py-20 gap-5 lg-text-start lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
        <div>
            <img data-aos="fade-down" src={img} width={400} height={400} className=" rounded border-2 p-1 border-fuchsia-500 img_glow"/>
        </div>
        <div className='text-white h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
            <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal uppercase text-fuchsia-600'>About Me</h1>
            <p data-aos="fade-left" className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium autem itaque fugiat, dignissimos pariatur ducimus voluptate, iure cupiditate nihil molestias magnam minima temporibus tempora corporis. Illo quaerat enim porro.</p>
            <div className='flex mt-8 gap-2'>
                <div className='flex items-center justify-center'>
                    <div className=" flex space-x-2">
                    <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50  text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden"> Resume </button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default About