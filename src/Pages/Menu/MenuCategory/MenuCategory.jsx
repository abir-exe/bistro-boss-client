/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
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
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-2 mt-3">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;