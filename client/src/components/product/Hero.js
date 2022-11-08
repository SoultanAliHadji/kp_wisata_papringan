import "../../App.css";

const Hero = () => {
  return (
    <div className="mt-[20px]">
      <div className="mb-8">
        <div className="w-full h-[320px] flex justify-center flex items-center">
          <img src={require("../../assets/ex_product_hero.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
