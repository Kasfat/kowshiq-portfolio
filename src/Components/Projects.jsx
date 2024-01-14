import img3 from './../assets/Images/project3.png'
import img4 from './../assets/Images/project4.png'

function Projects() {
  return (
    <>
      <div id="Projects" className=" p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className=" text-[52px] font-semibold mb-20 text-fuchsia-800 uppercase leading-normal">Projects</h1>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
              <img data-aos="fade-down" src={img4} height={250} width={250} className=' flex items-center justify-center rounded-3xl p-2 border-2 border-fuchsia-800  b_glow'/>
              <img data-aos="fade-up" src={img3} height={250} width={250} className=' flex items-center justify-center rounded-3xl p-2 border-2 border-fuchsia-800  b_glow'/>
              <img data-aos="fade-down" src={img4} height={250} width={250} className=' flex items-center justify-center rounded-3xl p-2 border-2 border-fuchsia-800  b_glow'/>
              <img data-aos="fade-up" src={img3} height={250} width={250} className=' flex items-center justify-center rounded-3xl p-2 border-2 border-fuchsia-800  b_glow'/>
        </div>
      </div>
    </>
  )
}

export default Projects