import img from "../../../assets/home/featured.jpg"
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import "./Feature.css"
const Feature = () => {
    return (
   
<div className="feature-item pt-8 my-20 bg-fixed  text-white">
  <SectionTitle subHeader={"Check it out"} header={"FROM OUR MENU"}></SectionTitle>
  <div className="md:flex justify-center bg-slate-900 bg-opacity-30 items-center pt-12 pb-20 px-6 md:px-36 ">
    <div className="md:w-1/2">
      <img className="w-full h-auto" src={img} alt="Image" />
    </div>
    <div className="md:w-1/2 md:ml-10">
      <p>May 31, 2023</p>
      <p className="uppercase">where can I get some?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nam labore fuga dignissimos non, laborum exercitationem libero.</p>
      <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
    </div>
  </div>
</div>



    );
};

export default Feature;