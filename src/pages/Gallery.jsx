import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div className="pt-20 pb-8">
      <h1 className="text-4xl text-center font-bold text-[#dc2626] mb-8">
        OUR GALLERY
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
          <img
            className="w-full h-[400px]"
            src="https://i.ibb.co/g334n8x/Home-page-Victus-Banner.webp"
            alt=""
          />
        </motion.div>
        <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
        <img
          className="w-full h-[400px]"
          src="https://i.ibb.co/XF58BCS/download-10.jpg"
          alt=""
        />
        </motion.div>
        <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
        <img
          className="w-full h-[400px]"
          src="https://i.ibb.co/ZHFVb0w/download-5.jpg"
          alt=""
        />
        </motion.div>
       <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
       <img
          className="w-full h-[400px]"
          src="https://i.ibb.co/MVnhqMF/download-9.jpg"
          alt=""
        />
       </motion.div>
        <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
        <img
          className="w-full h-[400px]"
          src="https://i.ibb.co/WF84TDc/images-4.jpg"
          alt=""
        />
        </motion.div>
        <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
        <img
          className="w-full h-[400px]"
          src="https://i.ibb.co/LrnfMMX/htk722cpqzc41.jpg"
          alt=""
        />
        </motion.div>
        <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
        <img
          className="w-full h-[400px]"
          src="https://i.ibb.co/nrR8Tc3/images-1.jpg"
          alt=""
        />
        </motion.div>
        <motion.div
      whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}>
        <img
          className="w-full h-[400px]"
          src="https://i.ibb.co/j3GmYp6/images.jpg"
          alt=""
        />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
