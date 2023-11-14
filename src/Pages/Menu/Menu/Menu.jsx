import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg"
import pizzaBg from "../../../assets/menu/pizza-bg.jpg"
import saladBg from "../../../assets/menu/salad-bg.jpg"
import soupBg from "../../../assets/menu/soup-bg.jpg"
import desertBg from "../../../assets/menu/dessert-bg.jpeg"
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {

  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert')
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
      {/* desert menu items */}
      <MenuCategory
      items={desserts}
      title="Desert"
      img={desertBg}
      ></MenuCategory>
      {/* Pizza */}
      <MenuCategory
      items={pizza}
      title="Pizza"
      img={pizzaBg}
      ></MenuCategory>
      {/* Soup */}
      <MenuCategory
      items={soup}
      title="Soup"
      img={soupBg}
      ></MenuCategory>
      {/* Salad */}
      <MenuCategory
      items={salad}
      title="Salad"
      img={saladBg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
