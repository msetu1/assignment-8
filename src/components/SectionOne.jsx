const SectionOne = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="px-5 md:px-10 lg:px-0">
        <h2 className="text-3xl font-bold">
          EVENT <span className="text-[#dc2626]">PRICE LIST</span>
        </h2>
        <h3 className="text-2xl font-semibold text-slate-500">
          Awesome section description goes here
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7 px-5 md:px-10 lg:px-0">
        <div className="text-center bg-slate-100">
          <h1 className="text-white text-2xl font-semibold rounded-t-lg bg-black py-10 ">
            PERSONAL
          </h1>
          <h1 className="text-6xl py-10  bg-slate-200 mb-4 ">
            100 <sup>$</sup>
          </h1>
          <p className="">Elena Electronics</p>
          <div className="divider"></div>
          <p className="">Maxwell Innovations</p>
          <div className="divider"></div>
          <p className="">Sophia Circuitry Solutions</p>
          <div className="divider"></div>
          <p className=" mb-4">Isabella Electronics Enterprises</p>
          <div className="bg-slate-200 py-10 rounded-b-lg">
            <button className="px-10 rounded py-3 text-xl font-bold bg-black hover:bg-[#dc2626] text-white">
              Register now
            </button>
          </div>
        </div>
        <div className="text-center bg-slate-100">
          <h1 className="text-white text-2xl font-semibold rounded-t-lg bg-[#dc2626] py-10 ">
            COMPANY
          </h1>
          <h1 className="text-6xl py-10  bg-slate-200 mb-4 ">
            200 <sup>$</sup>
          </h1>
          <p className="">Apple</p>
          <div className="divider"></div>
          <p className="">ElectronEra Enterprises</p>
          <div className="divider"></div>
          <p className="">WiredWave Technologies</p>
          <div className="divider"></div>
          <p className=" mb-4">PowerPulse Electronics</p>
          <div className="bg-slate-200 py-10 rounded-b-lg">
            <button className="px-10 rounded py-3 text-xl font-bold bg-[#dc2626] hover:bg-black text-white">
              Register now
            </button>
          </div>
        </div>
        <div className="text-center bg-slate-100">
          <h1 className="text-white text-2xl font-semibold rounded-t-lg bg-black py-10 ">
            BUSINESS
          </h1>
          <h1 className="text-6xl py-10  bg-slate-200 mb-4 ">
            300 <sup>$</sup>
          </h1>
          <p className="">Phone, Laptop, Computer</p>
          <div className="divider"></div>
          <p className="">Precision in Every Connection</p>
          <div className="divider"></div>
          <p className="">Connecting Ideas, Powering Progress</p>
          <div className="divider"></div>
          <p className=" mb-4">Energizing Innovations</p>
          <div className="bg-slate-200 py-10 rounded-b-lg">
            <button className="px-10 rounded py-3 text-xl font-bold bg-black hover:bg-[#dc2626] text-white">
              Register now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
