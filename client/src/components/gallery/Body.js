import "../../App.css";

const Body = () => {
  return (
    <div className="md:pt-8">
      <div className="grid grid-cols-5 gap-y-8">
        <div className="flex justify-center">
          <img
            className="w-44 h-44"
            src={require("../../assets/ex_gallery_img.png")}
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-44 h-44"
            src={require("../../assets/ex_gallery_img.png")}
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-44 h-44"
            src={require("../../assets/ex_gallery_img.png")}
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-44 h-44"
            src={require("../../assets/ex_gallery_img.png")}
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-44 h-44"
            src={require("../../assets/ex_gallery_img.png")}
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-44 h-44"
            src={require("../../assets/ex_gallery_img.png")}
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-44 h-44"
            src={require("../../assets/ex_gallery_img.png")}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-[40px]">
        <button className="px-4 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
          1
        </button>
        <button className="px-4 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
          2
        </button>
        <button className="px-4 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
          3
        </button>
      </div>
    </div>
  );
};

export default Body;
