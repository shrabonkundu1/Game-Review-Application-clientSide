import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";


const provider = new GoogleAuthProvider;
const SignUp = () => {

    const  {createUser, setUser,updateP}  = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); 

    const [errorMessage,setErrorMessage]= useState("");
    const [success, setSuccess]= useState(false)



   

    const handleSignUp  = e => {
        e.preventDefault();
        const form = new FormData(e.target);
       const name = form.get("name");
       const photo = form.get("photo");
       const email = form.get("email");
       const password = form.get("password");
       const terms = form.get("terms");
        console.log(name, photo, email, password, terms)
        setErrorMessage("");
        setSuccess(false);

        
        if (password.length < 6) {
            setErrorMessage("Password should be 6 charecter or longer");
            return;
          }

        if(!/[A-Z]/.test(password)) {
          setErrorMessage("Password must contain one uppercase letter")
          return;
        }
        if(!/[a-z]/.test(password)) {
          setErrorMessage("Password must contain one lowercase letter")
          return;
        }


        if(!terms) {
            setErrorMessage("Please accecpt all terms & condition");
            return;
          }
        
        
      createUser(email,password)
      .then(result => {
        const user = result.user;
        toast.success("Sign Up successfully!",{
          position: "top-center",
          autoClose:2000
      });
      updateP({displayName:name , photo:photo})
              setUser(user)
              navigate("/")
              setSuccess(true)
              e.target.reset()
            }).catch(error => {
            
              setErrorMessage(error.message)
              setSuccess(false)
            })
      

    };    
    



    const handleGoogleSignIn = () => {
        signInWithPopup(auth,provider )
        .then(result => {
          toast.success("Sign Up successfully!",{
            position: "top-center",
            autoClose:2000
        });
    
        
        navigate("/")
      })
      .catch(error => {
   
        setErrorMessage(error.message)
      });

    };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto mt-20 shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-5xl font-bold mb-10">Sign Up now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
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
            <div
              onClick={() => setShowPassword(!showPassword)}
              className=" absolute right-4 top-[54px]"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <label className="label justify-start gap-2 cursor-pointer">
              <input type="checkbox" name="terms" className="checkbox" />
              <span className="label-text">
                Accept all the Terms & Condition.
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
        {errorMessage && (
          <p className="text-xl text-red-500 ">{errorMessage}</p>
        )}
        {success && (
          <p className="text-xl text-center mb-3 text-green-500">
            Sign Up is Successfull.
          </p>
        )}



        <div className="text-center my-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline bg-yellow-300"
          >
            <FcGoogle className="text-xl hover:text-white" />
            Sign Up With Google
          </button>
        </div>

        <p className="mb-5 mx-auto">
          {" "}
          Already have an account Please{" "}
          <Link className="text-blue-700 ml-2" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;





