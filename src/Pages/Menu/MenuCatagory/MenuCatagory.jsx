import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCatagory = ({item,title,img}) => {
    return (
  <div className="pt-8">
         { title &&  <Cover img={img} title={title}></Cover>}
        <div className="grid md:grid-cols-2 gap-10 mt-16 mb-10 sm:p-10">
        {
            item.map(item => <MenuItem
                key={item._id}
                item={item}
            ></MenuItem>)
        }
      
    </div>
  </div>
    );
};

export default MenuCatagory;