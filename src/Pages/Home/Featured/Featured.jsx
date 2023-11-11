import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-section pt-8 mb-8 text-white">
            <SectionTitle
            heading="Featured Item"
            subHeading="check it out"
            ></SectionTitle>
            <div className="md:flex justify-center items-center pt-12 pb-20 px-20 md:gap-8">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati saepe ducimus maiores? Quasi tempora in libero praesentium distinctio, consequuntur doloribus. Officia ducimus aliquid libero suscipit. Modi tempora placeat cumque laudantium adipisci dicta ea illo repellat eius, recusandae aspernatur quos, labore nobis nostrum error voluptates necessitatibus! Omnis alias consequuntur repellat fugit!</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;