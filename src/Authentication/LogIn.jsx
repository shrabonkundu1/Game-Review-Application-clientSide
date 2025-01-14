import React from "react";
import auth from "../firebase/firebase.config";
import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";

const LogIn = () => {
  const { signInUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setSuccess(false);
    // setLoginError("we");
    

    signInUser(email,password)
      .then(result => {
   
        setSuccess(true)
        toast.success("Login Successfully!",{
          position: "top-center",
          autoClose:2000
      });
        e.target.reset()
        navigate("/")
      })
      .catch(error => {
       
        // setLoginError(error.message)
        toast.error("Email and password should not match",{
          position: "top-center",
          autoClose:2000
        })
      })
  };

  const handleForgetPassword = () => {
    const email  = emailRef.current.value;

    if(!email){
        setLoginError('Please enter a valid email address')
        return;
    }
    sendPasswordResetEmail(auth,email)
    .then(()=> {
      setLoginError("")
      toast.success("Password reset email sent, Please cheak your email!",{
        position: "top-center",
        autoClose:2000
    });
    })
    .catch(error => {
      setLoginError(error.message)
    })
  
  };


  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result => {
      toast.success("Login successfully!",{
        position: "top-center",
        autoClose:2000
    });
     
      navigate("/")
    })
    .catch(error => {
      
      setLoginError(error.message)
    })
  };
  
  return (
    <div className="card bg-base-100 w-full mx-auto mt-10 md:mt-20 max-w-sm shrink-0 shadow-2xl shadow-blue-400 mb-24">
      <form onSubmit={handleLogin} className="card-body">
        <h1 className="text-5xl font-bold text-center mb-10">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className=" absolute right-10 top-[270px]"
          >
            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </button>
          <label onClick={handleForgetPassword} className="label">
            <a className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {success && (
          <p className="text-green-500 text-xl text-center">
            User Login Successfully!{" "}
          </p>
        )}
        {loginError && <p className="text-xl text-red-500">{loginError}</p>}

      <div className="text-center my-4">
        <button onClick={handleGoogleSignIn} className="btn btn-outline bg-yellow-300 text-gray-700">
          <FcGoogle className="text-xl hover:text-white" />
          Login With Google
        </button>
      </div>

      <p className="mb-5 mx-auto">
        New to this website please{" "}
        <Link className="text-blue-700 ml-2" to="/signUp">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
