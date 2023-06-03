
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import FoodCard from '../../../component/FoodCart/FoodCard';
const ChefRecomends = () => {
    const [data] = useMenu();

    return (
        <div>
            <SectionTitle subHeader={"should try"} header="CHEF RECOMMENDS"></SectionTitle>
          <div className="grid md:grid-cols-3  mb-10">
          {
                data.slice(0,3).map(d=><FoodCard  key={d._id} d={d}></FoodCard>)
            }
            
          </div>
        </div>
    );
};

export default ChefRecomends;