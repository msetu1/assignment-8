import { NavLink, useLocation, useNavigate } from "react-router-dom";
import './login.css'
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
const Login = () => {
    const {userLogin}=useContext(AuthContext)
    const location = useLocation()
      const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
       
        // login user 
        userLogin(email,password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
            Swal.fire({
                title: 'Success',
                text: 'User Login successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        })
        .catch(error => {
          console.error(error)
          Swal.fire({
            title: 'Error!',
            text: 'Invalid email and password',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
    }
    return (
        <div className='min-h-screen  login-img'>
        <div className='flex h-[700px] pt-20 items-center justify-center'>
          <div className="ml-5 mr-20 lg:ml-0 my-20 lg:my-0">
            <div className="rounded-xl ">
              <div className="card w-full px-10 shadow-2xl border ">
                <div>
                  <h1 className=" text-4xl mt-8 text-center font-bold">Please Login Now</h1>
                </div>
                <form 
                onSubmit={handleLogin}
                 className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered" required />
                    
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="text-2xl font-semibold text-white px-16 py-3 bg-slate-800 hover:bg-[#dc2626] rounded-lg hover:rounded-full">Login</button>
                  </div>
                  <div>
                 <SocialLogin></SocialLogin>
                  </div>
                  <div className="text-center my-3">
                    <h1 className="text-xl font-semibold">Dont have an account? <NavLink
                      to="/register"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "text-2xl text-primary-content underline underline-offset-2 font-bold mx-2"
                      }
                    >
                      Register
                    </NavLink>
                    </h1>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;