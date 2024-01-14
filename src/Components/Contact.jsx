

function Contact() {
  return (
    <div id="Contact" className="p-4 lg:p-20 flex-col items-center justify-center lg:flex">
        <h1 className=" text-[52px] font-semibold mb-20 text-fuchsia-500 uppercase leading-normal">Contact With Me</h1>
        <form action="" className=" flex flex-col lg:w-1/2 gap-2">
          <div className="lg:flex gap-9">
            <input className="w-full my-3 p-4 rounded-lg bg-slate-800 border-2 border-fuchsia-800 text-slate-500 text-xl b_glow" type="text" placeholder="Enter Your Name"/>
            <input className="w-full my-3 p-4 rounded-lg bg-slate-800 border-2 border-fuchsia-800 text-slate-500 text-xl b_glow" type="mail" placeholder="Enter Your Email"/>
          </div>
          <textarea className="w-full lg:my-3 my-4 p-4 rounded-lg bg-slate-800 border-2 border-fuchsia-800 text-slate-500 text-xl b_glow" id="" cols="20" rows="10" type="text" placeholder="Write Your Massage..."></textarea>
          <button className="neno-button text-white border-2 border-fuchsia-800 bg-fuchsia-800 rounded-lg py-4 px-8 my-6 text-xl text-bold shadow-xl hover:shadow-fuchsia-800/50 hover:text-fuchsia-500 hover:bg-slate-900 uppercase relative overflow-hidden b_glow" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact