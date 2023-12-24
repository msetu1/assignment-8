import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item w-full relative bg-opacity-40 ">
          <img
            src="https://i.ibb.co/g334n8x/Home-page-Victus-Banner.webp"
            className="w-full h-[700px] "
          />
          <div className="absolute text-center md:top-[100px] lg:top-[150px] lg:left-[300px] text-primary-content">
            <h3 className="text-xl lg:text-3xl font-semibold mb-3">DON'T MISS THAT</h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-[#dc2626]">rf Electronics</span> Business
              Platform <br /> and All Conference
            </h1>
            <p className="max-w-4xl mx-auto lg:px-0 md:px-10 px-5 text-black">
              Hi, My name is Setu Akter. I am front end Developer and CSE
              Student. E-Business (electronic business) is any process that a
              business organization conducts over a computer-mediated network.
              Business organizations include any for-profit, governmental, or
              nonprofit entity. Their processes include production-, customer-,
              and internal- or management-focused business processes.
            </p>
            <div className="flex gap-3 items-center justify-center mt-4 lg:flex-row flex-col md:flex-row">
              <button className="btn btn-outline text-white mt-5 text-xl px-10 font-bold">
               My Resume
              </button>
              <NavLink 
              to="/dashboard"
              >
              <button className="btn  mt-5 text-xl px-10 bg-[#dc2626] text-white hover:bg-black font-bold">
              Let’s Explore
              </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative bg-opacity-40">
          <img
            src="https://i.ibb.co/Yhs0zNX/Getty-Images-614715418.jpg"
            className="w-full h-[700px]"
          />
           <div className="absolute text-center md:top-[100px] lg:top-[150px] lg:left-[300px] text-primary-content">
            <h3 className="text-xl lg:text-3xl font-semibold mb-3">DON'T MISS THAT</h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-[#dc2626]">rf Electronics</span> Business
              Platform <br /> and All Conference
            </h1>
            <p className="max-w-4xl mx-auto lg:px-0 md:px-10 px-5 ">
              Hi, My name is Setu Akter. I am front end Developer and CSE
              Student. E-Business (electronic business) is any process that a
              business organization conducts over a computer-mediated network.
              Business organizations include any for-profit, governmental, or
              nonprofit entity. Their processes include production-, customer-,
              and internal- or management-focused business processes.
            </p>
            <div className="flex gap-3 items-center justify-center mt-4 lg:flex-row flex-col md:flex-row">
              <button className="btn btn-outline text-white mt-5 text-xl px-10 font-bold">
               My Resume
              </button>
              <button className="btn  mt-5 text-xl px-10 bg-[#dc2626] text-white hover:bg-black font-bold">
              Let’s Explore
              </button>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative bg-opacity-40">
          <img
            src="https://i.ibb.co/W0XvGJH/blue-banner-with-3d-laptop-and-graphic-charts-vector-45434386.jpg"
            className="w-full h-[700px]"
          />
          <div className="absolute text-center md:top-[100px] lg:top-[150px] lg:left-[300px] text-primary-content">
            <h3 className="text-xl lg:text-3xl font-semibold mb-3">DON'T MISS THAT</h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-[#dc2626]">rf Electronics</span> Business
              Platform <br /> and All Conference
            </h1>
            <p className="max-w-4xl mx-auto lg:px-0 md:px-10 px-5 ">
              Hi, My name is Setu Akter. I am front end Developer and CSE
              Student. E-Business (electronic business) is any process that a
              business organization conducts over a computer-mediated network.
              Business organizations include any for-profit, governmental, or
              nonprofit entity. Their processes include production-, customer-,
              and internal- or management-focused business processes.
            </p>
            <div className="flex gap-3 items-center justify-center mt-4 lg:flex-row flex-col md:flex-row">
              <button className="btn btn-outline text-white mt-5 text-xl px-10 font-bold">
               My Resume
              </button>
              <button className="btn  mt-5 text-xl px-10 bg-[#dc2626] text-white hover:bg-black font-bold">
              Let’s Explore
              </button>
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative bg-opacity-40">
          <img
            src="https://i.ibb.co/g334n8x/Home-page-Victus-Banner.webp"
            className="w-full h-[700px]"
          />
          <div className="absolute text-center md:top-[100px] lg:top-[150px] lg:left-[300px] text-primary-content">
            <h3 className="text-xl lg:text-3xl font-semibold mb-3">DON'T MISS THAT</h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-[#dc2626]">rf Electronics</span> Business
              Platform <br /> and All Conference
            </h1>
            <p className="max-w-4xl mx-auto lg:px-0 md:px-10 px-5 text-black">
              Hi, My name is Setu Akter. I am front end Developer and CSE
              Student. E-Business (electronic business) is any process that a
              business organization conducts over a computer-mediated network.
              Business organizations include any for-profit, governmental, or
              nonprofit entity. Their processes include production-, customer-,
              and internal- or management-focused business processes.
            </p>
            <div className="flex gap-3 items-center justify-center mt-4 lg:flex-row flex-col md:flex-row">
              <button className="btn btn-outline text-white mt-5 text-xl px-10 font-bold">
               My Resume
              </button>
              <button className="btn  mt-5 text-xl px-10 bg-[#dc2626] text-white hover:bg-black font-bold">
              Let’s Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a
          href="#item1"
          className="btn px-4  py-2 text-xl bg-[#dc2626] text-white hover:bg-black"
        >
          1
        </a>
        <a
          href="#item2"
          className="btn px-4  py-2 text-xl bg-[#dc2626] text-white hover:bg-black"
        >
          2
        </a>
        <a
          href="#item3"
          className="btn px-4  py-2 text-xl bg-[#dc2626] text-white hover:bg-black"
        >
          3
        </a>
        <a
          href="#item4"
          className="btn px-4  py-2 text-xl bg-[#dc2626] text-white hover:bg-black"
        >
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
