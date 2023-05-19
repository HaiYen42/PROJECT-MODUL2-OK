import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getUser } from "../../services/userService";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../constants/validate";
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';

export const Login2 = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate= useNavigate();

    const handleToggleEye= (e)=>{

    }

    const handleLogin=(e)=>{
        e.preventDefault();
      const user= {
        email: email,
        password: password
      };
      userLogin
      .validate(user)
      .then(()=>{
        getUser()
        .then((res)=>{
            const result= res.data.find((e)=>{
                return e.email=== email;
            })
            if(!result){
                toast.error("Tài khoản ko tồn tại")
            }else{
                if(result.password !==password){
                toast.error("Mật khẩu ko chính xác")
                } else{
                    toast.success("Đăng nhập thành công");
                    setTimeout(()=>{
                        navigate("/")
                    },1000);
                }  
            }
        })
        .catch((err)=>{
            toast.error(`${err}`)
        })
      })
      .catch((err)=>{
        toast.error(`${err}`);
      })
    }
  
  return (
    <div className="loginForm">
      <ToastContainer />
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign In
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill d-flex mb-0">
                            <MdEmail className="iconreact" />
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder=" Your Email"
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline  d-flex flex-fill mb-0">
                            <RiLockPasswordFill className="iconreact" />
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                              value={password}
                              onChange={(e)=>setPassword(e.target.value)}
                            />
                            <button >
                             <AiFillEyeInvisible className='iconreact'/>
                            
                            </button>
                          </div>
                        </div>
                        <div className="row mb-4 ml-4">
                          <div className="col-md-6 d-flex justify-content-center">
                            <div className="form-check mb-3 mb-md-0">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="loginCheck"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="loginCheck"
                              >
                                {" "}
                                Remember me{" "}
                              </label>
                            </div>
                          </div>

                          <div className="col-md-6 d-flex justify-content-center">
                            <Link to={'/changepass'}>Forgot password?</Link>
                            {/* <a href="#!">Forgot password?</a> */}
                          </div>
                        </div>
                        <div className="d-flex justify-content-center w-100 mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg w-50"
                            onClick={handleLogin}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-7 align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                      <div
                        style={{
                          textDecoration: "underline",
                          fontStyle: "italic",
                        }}
                      >
                        {" "}
                        <Link to={"/register"}>I do not have account</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
