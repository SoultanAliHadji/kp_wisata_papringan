import "../../App.css";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-7 md:h-[550px] h-[300px]">
        <div className="col-start-1 col-end-4 flex items-center">
          <div>
            <h1 className="md:text-[52px] text-[24px] font-semibold">
              Selamat Datang
            </h1>
            <h2 className="md:text-[32px] text-[16px] font-semibold">
              Di Portal Kampung Wisata
            </h2>
            <h2 className="md:text-[32px] text-[16px] font-semibold text-[#006839] md:mb-[68px] mb-[28px]">
              Papringan
            </h2>
            <h3 className="md:text-[24px] text-[12px] font-semibold md:mb-[68px] mb-[28px]">
              "Desa Kuat Bersama Masyarakat Hebat"
            </h3>
            <div className="md:grid grid-cols-2">
              <div className="md:flex md:justify-start flex justify-center md:mb-0 mb-4">
                <a href="">
                  <button className="bg-[#006839] hover:bg-[#004f2b] text-white font-semibold px-4 py-2 rounded-[100px]">
                    Jelajahi Lebih
                  </button>
                </a>
              </div>
              <div className="flex md:justify-end justify-center items-center">
                <p>
                  Jumlah pengunjung: 124
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-4 col-end-8 flex justify-end items-center">
          <div className="md:h-[400px] h-[200px] flex gap-2">
            <div className="flex items-start">
              <img
                className="md:w-44 w-32 rounded-[10px]"
                src={require("../../assets/hero_landing_img1.png")}
                alt=""
              />
            </div>
            <div className="flex items-end">
              <img
                className="md:w-44 w-32 rounded-[10px]"
                src={require("../../assets/hero_landing_img2.png")}
                alt=""
              />
            </div>
            <div className="flex items-center">
              <img
                className="md:w-44 w-32 rounded-[10px]"
                src={require("../../assets/hero_landing_img3.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
