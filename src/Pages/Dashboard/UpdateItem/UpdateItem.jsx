import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const {name, category, recipe, price, _id} = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb and then get an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      }
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data)
      if(menuRes.data.modifiedCount > 0){
        //show a success popup
        // reset();
        toast(`${data.name} is updated`, {
          icon: '👏',
        });
      }
    }
    console.log('with image url', res.data);
  };

  

  return (
    <div>
      <SectionTitle
        heading="Update an Item"
        subHeading="Refresh info"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full  my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
            defaultValue={name}
              {...register("name", { required: true })}
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
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full  "
              >
                <option disabled value="default">
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
              defaultValue={price}
                {...register("price", { required: true })}
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
            defaultValue={recipe}
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
          </div>
          <div className="form-control w-full  my-6">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn ">
            Update Menu Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
