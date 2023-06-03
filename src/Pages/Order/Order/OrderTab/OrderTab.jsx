import FoodCard from "../../../../component/FoodCart/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-3">
        {items.map((d) => (
          <FoodCard key={d._id} d={d}></FoodCard>
        ))}
      </div>
    );
};

export default OrderTab;