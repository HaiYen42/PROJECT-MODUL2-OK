import React from 'react'
import {FaUserAlt, FaKey} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getUser, postUser } from '../../services/userService';
import { useState } from 'react';
import {toast,ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { userSchema } from '../../constants/validate';

export const Register = () => {
  const navigate= useNavigate();
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [confirmPass, setConfirmPass]=useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setconfirmPasswordType] = useState("password");
  const handleToggleEye=(e)=>{
    e.preventDefault();
    if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
  }
  const handleToggleEye1=(e)=>{
    e.preventDefault();
    if(confirmPasswordType==="password")
      {
        setconfirmPasswordType("text")
       return;
      }
      setconfirmPasswordType("password")
  }
  const handleRegister=(e)=>{
    e.preventDefault()
    const user = {
      "name":name,
      "email":email,
      "password":password,
      "confirmPass":confirmPass
    }
    userSchema
    .validate(user)
    .then((value) => {
      getUser().then((res) => {
        const checkEmail =res.data.find((element) => element.email==user.email)
        if(!checkEmail){
          postUser(user.email,user.password,user.name)
          .then((e) =>{
            toast.success("Add successfully !!")
            navigate("/login");
          })
          .catch((err) => {
            toast.error(`${err}`)
          }); 
        }else {
          toast.error("Email đã tồn tại !!")
        }
       
      }).catch((err) => {
        toast.error(`${err}`)
      })
       
    })
    .catch(function(err) {
      toast.error(`${err}`)
    });
  }
  return (
    <div className='registerForm'>
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
                  Sign Up
                </p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill d-flex mb-0"> 
                      <FaUserAlt className='iconreact'/>
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        placeholder='Your Name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                      /> 
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill d-flex mb-0">
                      <MdEmail className='iconreact'/>
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        placeholder=' Your Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline  d-flex flex-fill mb-0" >
                   < RiLockPasswordFill className='iconreact'/>
                      <input
                        type={passwordType}
                        id="form3Example4c"
                        className="form-control"
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                      <button onClick={handleToggleEye}>
                        {passwordType=="password"?<AiFillEyeInvisible className='iconreact'/> : <AiFillEye className='iconreact' /> }
                        </button>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline d-flex flex-fill mb-0">
                      <FaKey className='iconreact'/>
                      <input
                        type={confirmPasswordType}
                        id="form3Example4cd"
                        className="form-control"
                        placeholder='Repeat your password'
                        value={confirmPass}
                        onChange={(e)=>setConfirmPass(e.target.value)}
                      />
                      <button onClick={handleToggleEye1}>
                        {confirmPasswordType=="password"?<AiFillEyeInvisible className='iconreact'/> : <AiFillEye className='iconreact' /> }
                        </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" 
                     className="btn btn-primary btn-lg"
                     onClick={handleRegister}>
                      Register
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
                 <div style={{textDecoration:'underline', fontStyle:'italic', marginTop:'25px'}}>  <Link to={"/login"}>I'm already member</Link></div>
              </div>
                 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

