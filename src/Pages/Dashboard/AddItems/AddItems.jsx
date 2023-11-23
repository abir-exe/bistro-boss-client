import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle
        heading="Add an Item"
        subHeading="What's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full  my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name", {required: true} ) }
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full  "
            />
          </div>
          <div className="flex gap-6">
            {/* category  */}
            <div className="form-control w-full  my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", {required: true})}
                className="select select-bordered w-full  "
              >
                <option disabled selected>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price  */}
            <div className="form-control w-full  my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", {required: true})}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full  "
              />
            </div>
          </div>
          {/* recipe details  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
             {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
          </div>
          <div className="form-control w-full  my-6">
          <input  {...register("image")} type="file" className="file-input w-full max-w-xs" />
          </div>

          <button className="btn ">Add Item <FaUtensils className="ml-4"></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
