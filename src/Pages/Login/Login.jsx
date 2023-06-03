import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const captchaRef = useRef();
    const [desabled,setDesabled] =useState(true);
    const {signIn}=useContext(AuthContext)
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email =form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user);
    })
  };
  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])
const handleVAlidateCaptcha=()=>{
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
        setDesabled(false)
    }else{
        setDesabled(true)
    }

}
  return (
    <>
                 <Helmet>
        <title>Bestro Boss| Login</title>
        
      </Helmet>
    
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
          
            </div>
            <div className="form-control">
              <label className="label">
              < LoadCanvasTemplate />
              </label>
              <input
              ref={captchaRef }
                type="text"
                placeholder=" type captcha"
                name="captcha"
                className="input input-bordered"
              />
          <button onClick={handleVAlidateCaptcha} className="btn btn-outline btn-xs mt-3">Validate</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={desabled} className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p>Do not Have Account? <Link to="/signUp"><span className='text-amber-700'> SignUp</span></Link></p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;