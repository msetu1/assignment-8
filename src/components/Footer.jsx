import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center  bg-black text-primary-content py-20">
        <aside>
          <img
            className="rounded-full  h-[80px] w-[80px]"
            src="https://i.ibb.co/Jz5nZNq/img-setu.png"
            alt=""
          />
          <p className="font-bold mt-5">
            ACME Industries Ltd. <br />
            Providing reliable tech since 1992
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
        <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/profile.php?id=100093013625415"> <FaFacebook className="text-white text-2xl" /></a>
            <a href="https://github.com/msetu1"> <FaGithub className="text-white text-2xl" /></a>
            <a href="https://www.linkedin.com/feed/"> <FaLinkedin className="text-white text-2xl" /></a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
