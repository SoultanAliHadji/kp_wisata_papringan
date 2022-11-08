import "../../App.css";

const Hero = () => {
  return (
    <div className="mt-12">
      <div className="mb-20">
        <h3 className="md:text-[24px] text-[12px] font-semibold text-center">
          Abadikan Momen Berhargamu
        </h3>
        <h3 className="md:text-[24px] text-[12px] font-semibold text-center">
          Di Sini
        </h3>
      </div>
      <div className="flex justify-center mb-20">
        <button className="w-10 h-10 border-2 border-[#006839] rounded-[100px] hover:bg-[#006839] text-[#006839] hover:text-white text-[24px] font-bold">
          +
        </button>
      </div>
      <div className="flex justify-center mb-20">
        <h4 className="text-start md:text-[16px] text-[14px]">
          Klik Untuk Tambahkan Foto
        </h4>
      </div>
      <div className="flex justify-center">
        <img src={require("../../assets/line10.png")} alt="" />
      </div>
    </div>
  );
};

export default Hero;
