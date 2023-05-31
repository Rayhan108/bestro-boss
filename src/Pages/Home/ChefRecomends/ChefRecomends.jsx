
import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

const ChefRecomends = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                
                setData(data)
            })
    }, [])
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