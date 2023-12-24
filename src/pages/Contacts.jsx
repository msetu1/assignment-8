const Contacts = () => {
    return (
       <div className="min-h-screen pt-32 mb-10 ">
      <h1 className="text-4xl text-center font-bold text-[#dc2626] mb-10">
        CONTACT ME
      </h1>
      <div className="max-w-4xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mb-10 px-4 lg:px-0">
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-2">Email</h1>
            <input
              type="email"
              name="email"
              id=""
              className="w-full border py-4 px-5 rounded-md border-[#dc2626] "
              placeholder="Your Email Address"
            />
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-2">Your Name</h1>
            <input
              type="text"
              name="name"
              id=""
              className="w-full border py-4 px-5 rounded-md border-[#dc2626]"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div>
        <h1 className="text-2xl font-semibold mb-2 ">Message</h1>
          <textarea name="" id="" cols="30" rows="4" className="w-full border py-4 px-5 rounded-md border-[#dc2626] "
          placeholder="Your Message"></textarea>
        </div>
      </div>
      <div className="text-center mt-20">
      <button className="btn text-left btn-outline border-0 border-[#dc2626] border-b-4 text-xl ">
            Download resume
          </button>
      </div>
    </div>
    );
};

export default Contacts;