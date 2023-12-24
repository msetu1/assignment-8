
const About = () => {
  return (
    <div className="min-h-screen pt-28 mb-10">
      <h1 className="text-4xl text-center font-bold text-[#dc2626]">
        ABOUT US
      </h1>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row ">
        <div className="w-[50%] flex justify-start ">
          <div className="hidden lg:block ">
            <img
              className="h-[550px]"
              src="https://i.ibb.co/Jz5nZNq/img-setu.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-[50%]  px-10 lg-px-0 pt-48">
        <h1 className="text-4xl font-bold mb-5">Hi, I am Web Developer</h1>
           <ul>
            <li className="text-2xl font-semibold list-disc mb-2">Name: Mst.Setu AKter</li>
            <li className="text-2xl font-semibold list-disc mb-2">Age: 19 years</li>
            <li className="text-2xl font-semibold list-disc mb-2">Nationality: Bangladeshi</li>
            <li className="font-semibold list-disc mb-5">Address: lalmatia 3/7 block G,Mohammadpur,Dhaka,Bangladesh</li>
           </ul>
           <a href="/public/setu-resume/Richard.pdf" download>
          <button className="btn text-left btn-outline border-0 border-[#dc2626] border-b-4 text-xl ">
           Explore Now
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
