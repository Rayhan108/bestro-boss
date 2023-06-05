import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const ChefCard = ({d}) => {
   const {user}=useContext(AuthContext)
const [,refetch] =useCart()
   const navigate=useNavigate()
   const location= useLocation()
    // console.log(d);
    const {image,name,recipe,price,_id} = d;
    const handleAddToCart=item=>{
      console.log(item);
      if(user && user.email){
const cartItem ={menuItemId:_id,name,image,price,email:user.email}
        fetch('http://localhost:5000/carts',{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cartItem),
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            refetch() //refetch cart when update the the number of item in cart 
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Item Added',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }else{
        Swal.fire({
          title: 'You have to login for order food',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now!'
        }).then((result) => {
          if (result.isConfirmed) {
          navigate('/Login',{state:{from:location}})
          }
        })
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl text">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="text-white bg-slate-900 absolute right-0 mr-4 mt-4 px-4">{price}</p>
        <div className="card-body text-center">
          <h2 className="card-title text-center block">{name}</h2>
          <p>{recipe}</p>
          <div className="mt-5 text-center">
         <button onClick={()=>handleAddToCart(d)} className="btn btn-outline border-0 border-b-4 border-orange-500 mt-4">ADD TO CART</button>
         </div>
        </div>
      </div>
    );
};

export default ChefCard;