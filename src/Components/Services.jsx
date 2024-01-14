

function Services() {
  return (
    <>
      <div id="Services" className=" p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className=" text-[52px] font-semibold mb-20 text-fuchsia-800 uppercase leading-normal">Services</h1>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
              <h2 data-aos="fade-up" className=" text-fuchsia-800 text-[30px] flex border-2 border-fuchsia-800 justify-center items-center font-semibold rounded-ss-3xl rounded-br-3xl h-36 w-44 b_glow">HTML</h2>
              <h2 data-aos="fade-down" className=" text-fuchsia-800 text-[30px] flex border-2 border-fuchsia-800 justify-center items-center font-semibold rounded-ss-3xl rounded-br-3xl h-36 w-44 b_glow">CSS</h2>
              <h2 data-aos="fade-up" className=" text-fuchsia-800 text-[30px] flex border-2 border-fuchsia-800 justify-center items-center font-semibold rounded-ss-3xl rounded-br-3xl h-36 w-44 b_glow">Javascript</h2>
              <h2 data-aos="fade-down" className=" text-fuchsia-800 text-[30px] flex border-2 border-fuchsia-800 justify-center items-center font-semibold rounded-ss-3xl rounded-br-3xl h-36 w-44 b_glow">React</h2>
        </div>
      </div>
    </> 
  )
}

export default Services