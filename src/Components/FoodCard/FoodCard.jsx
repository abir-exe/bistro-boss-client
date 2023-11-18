/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({item}) => {

  const navigate = useNavigate();

    const {image, price, name, recipe, _id} = item;
    const {user} = useAuth();

    const handleAddToCart = (food) => {
      if(user && user.email){
        //send data to the database
        console.log(food, user.email);
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axios.post('http://localhost:5000/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            toast('Added to Cart!', {
              icon: '👏',
            });
          }
        })

      }
      else{
        // eslint-disable-next-line no-unused-vars
        toast((t) => (
          <span>
            Please <b>login</b> to add to the cart
            <button className="ml-2 btn btn-sm btn-outline" onClick={() => navigate('/login', {state: {from: location}})}>
              Login
            </button>
          </span>
        ));
      }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" />
  </figure>
  <p className="absolute right-0 mr-4 mt-4 px-2 bg-slate-900 text-white">${price}</p>
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p className="">{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 mt-3  border-orange-400">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;