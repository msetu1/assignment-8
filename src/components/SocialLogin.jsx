import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const socialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="mt-5">
      <div className="flex items-center gap-6 justify-between">
        <Link>
          <h1
            onClick={() => socialLogin(googleLogin)}

            className="btn btn-outline text-white mt-5 text-xl px-10 font-bold"
          >
            <FcGoogle className="text-2xl"></FcGoogle> Google
          </h1>
        </Link>
        <Link>
          <h1
            onClick={() => socialLogin(githubLogin)}

            className="btn btn-outline text-white mt-5 text-xl px-10 font-bold"
          >
            <BsGithub className="text-2xl text-white"></BsGithub> Github
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
