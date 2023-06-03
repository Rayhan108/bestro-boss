
const ChefCard = ({d}) => {
   
    // console.log(d);
    const {image,name,recipe} = d;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl text">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body text-center">
          <h2 className="card-title text-center block">{name}</h2>
          <p>{recipe}</p>
          <div className="mt-5 text-center">
         <button className="btn btn-outline border-0 border-b-4 mt-4">ADD TO CART</button>
         </div>
        </div>
      </div>
    );
};

export default ChefCard;