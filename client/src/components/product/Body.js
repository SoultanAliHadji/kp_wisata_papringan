import "../../App.css";

const Body = () => {
  return (
    <div>
      <div className="w-max mb-12">
        <div>
          <h2 className="md:text-[32px] text-[16px] font-semibold mb-2">
            Produk Papringan
          </h2>
        </div>
        <div className="flex justify-center">
          <img
            className="md:w-max w-24 h-max"
            src={require("../../assets/line9.png")}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-y-[20px]">
        <div className="flex justify-center">
          <div className="px-[20px]">
            <div className="bg-[#EDECEC] rounded-[10px]">
              <img
                className="rounded-t-[10px] w-full"
                src={require("../../assets/ex_product_object.png")}
                alt=""
              />
              <div className="p-2">
                <p className="font-bold">Nama Produk</p>
                <p>Penjelasan singkat mengenai produk</p>
              </div>
            </div>
          </div>
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
