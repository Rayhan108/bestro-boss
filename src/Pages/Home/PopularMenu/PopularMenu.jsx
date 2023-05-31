

import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [data] = useMenu();
    const popularItems = data.filter(item => item.category === 'popular');
    return (
        <section className="mb-12 ">
            <SectionTitle
                header="From Our Menu"
                subHeader="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10  sm:p-10">
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
         <div className="mt-5 text-center">
         <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
         </div>
        </section>
    );
};

export default PopularMenu;