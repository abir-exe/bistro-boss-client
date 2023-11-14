/* eslint-disable react/prop-types */
import Cover from "../../../Components/Shared/Cover/Cover";
import MenuItems from "../../../Components/Shared/MenuItems/MenuItems";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            { title && <Cover img={img} title={title}></Cover> }
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;