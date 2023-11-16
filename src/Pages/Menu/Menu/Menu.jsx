import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg"
import pizzaBg from "../../../assets/menu/pizza-bg.jpg"
import saladBg from "../../../assets/menu/salad-bg.jpg"
import soupBg from "../../../assets/menu/soup-bg.jpg"
import dessertBg from "../../../assets/menu/dessert-bg.jpeg"
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {

  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuBg} title="Our Menu"></Cover>
      {/* Main cover */}
      <SectionTitle subHeading="Don't Miss" heading="Todays Offer"></SectionTitle>
      {/* Offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
      items={dessert}
      title="dessert"
      img={dessertBg}
      ></MenuCategory>
      {/* Pizza */}
      <MenuCategory
      items={pizza}
      title="pizza"
      img={pizzaBg}
      ></MenuCategory>
      {/* Soup */}
      <MenuCategory
      items={soup}
      title="soup"
      img={soupBg}
      ></MenuCategory>
      {/* Salad */}
      <MenuCategory
      items={salad}
      title="salad"
      img={saladBg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
