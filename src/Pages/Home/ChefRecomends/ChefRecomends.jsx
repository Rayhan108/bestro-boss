
import ChefCard from "./ChefCard";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ChefRecomends = () => {
    const [data] = useMenu();

    return (
        <div>
            <SectionTitle subHeader={"should try"} header="CHEF RECOMMENDS"></SectionTitle>
          <div className="grid md:grid-cols-3  mb-10">
          {
                data.slice(0,3).map(d=><ChefCard key={d._id} d={d}></ChefCard>)
            }
          </div>
        </div>
    );
};

export default ChefRecomends;