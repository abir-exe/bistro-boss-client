import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg"


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuBg} title="Our Menu"></Cover>
      
    </div>
  );
};

export default Menu;
