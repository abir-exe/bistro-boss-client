/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {

    const {image, price, name, recipe} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" />
  </figure>
  <p className="absolute right-0 mr-4 mt-4 px-2 bg-slate-900 text-white">${price}</p>
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p className="">{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline border-0 border-b-2 mt-3  border-orange-400">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;