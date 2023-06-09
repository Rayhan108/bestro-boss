import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result =>{
            // eslint-disable-next-line no-unused-vars
            const loggedInUser=result.user;
            const saveUser = { name: loggedInUser.displaName, email: loggedInUser.email }
            fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(saveUser),
              })
                .then((res) => res.json())
                .then(() => {
                  
                    navigate(from,{replace:true})
                  
                });
           
        })
    }
    return (
        <div className="text-center">
              <div className="divider"></div>
              <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
  <FaGoogle></FaGoogle>
</button>
        </div>
    );
};

export default SocialLogin;