import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart,refetch]=useCart()
    console.log(cart);
    const total = cart.reduce((sum,item)=>item.price+sum,0);
    
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
               <Helmet>
        <title>Bestro Boss| MyCart</title>
        
      </Helmet>
          <div className="uppercase font-semibold h-[60px] items-center flex justify-evenly">
          <h2>my cart {cart?.length}</h2>
            <h2>Total: ${total}</h2>
            <button className="btn btn-warning btn-sm">Pay</button>
          </div>
          <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
       
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item,i)=> <tr key={item._id} >
        <td>
        {i+1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} />
              </div>
            </div>
            
          </div>
        </td>
        <td>
        {item.name}
        </td>
        <td className="text-end">${item.price}</td>
        <td>
          <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
        </td>
      </tr>)
      }
     
   
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default MyCart;