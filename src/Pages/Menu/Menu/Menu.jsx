import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import  saladImg from "../../../assets/menu/salad-bg.jpg"

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuCatagory from "../MenuCatagory/MenuCatagory";


const Menu = () => {
    const [data]=useMenu()
  
    const desserts = data.filter(item => item.category === 'dessert');
    const soup = data.filter(item => item.category === 'soup');
    const salad = data.filter(item => item.category === 'salad');
    const pizza = data.filter(item => item.category === 'pizza');
    const offered = data.filter(item => item.category === 'offered');
   
    return (
        <div>
                   <Helmet>
        <title>Bestro Boss| Menu</title>
        
      </Helmet>
      {/* main cover */}
        <Cover img={menuImg} title="our menu"></Cover>
      <SectionTitle subHeader={"don't miss"} header="today's offer"></SectionTitle>
      {/* offered item */}
      <MenuCatagory item={offered}></MenuCatagory>
      {/* dessert */}
      <MenuCatagory item={desserts} title={"dessert"} img={dessertImg}></MenuCatagory>
      <MenuCatagory item={pizza} title={"pizza"} img={pizzaImg}></MenuCatagory>
      <MenuCatagory item={soup} title={"soup"} img={soupImg}></MenuCatagory>
      <MenuCatagory item={salad} title={"salad"} img={saladImg}></MenuCatagory>
        </div>
    );
};

export default Menu;