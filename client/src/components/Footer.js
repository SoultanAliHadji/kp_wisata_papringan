import "../App.css";

const Footer = () => {
  return (
    <div>
      <div className="w-full mt-[40px] mb-[20px]">
        <img src={require("../assets/line4.png")} alt="" />
      </div>
      <div className="flex justify-center gap-4 mb-[20px]">
        <div className="w-8 h-8 border border-[#006839] rounded-[100px] flex justify-center items-center">
          <a href="https://wa.me/6285329733836" target="_blank">
            <img
              className="h-4 hover:h-5"
              src={require("../assets/footer_logo1.png")}
              alt=""
            />
          </a>
        </div>
        <div className="w-8 h-8 border border-[#006839] rounded-[100px] flex justify-center items-center">
          <a href="https://wa.me/6285329733836" target="_blank">
            <img
              className="h-4 hover:h-5"
              src={require("../assets/footer_logo2.png")}
              alt=""
            />
          </a>
        </div>
        <div className="w-8 h-8 border border-[#006839] rounded-[100px] flex justify-center items-center">
          <a href="https://wa.me/6285329733836" target="_blank">
            <img
              className="h-4 hover:h-5"
              src={require("../assets/footer_logo3.png")}
              alt=""
            />
          </a>
        </div>
        <div className="w-8 h-8 border border-[#006839] rounded-[100px] flex justify-center items-center">
          <a href="https://wa.me/6285329733836" target="_blank">
            <img
              className="w-4 hover:w-5"
              src={require("../assets/footer_logo4.png")}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-[20px] md:text-[14px] text-[10px]">
        <a href="/">
          <button className="px-2 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
            Home
          </button>
        </a>
        <a href="/tourism">
          <button className="px-2 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
            Daya Tarik Wisata
          </button>
        </a>
        <a href="/homestay">
          <button className="px-2 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
            Homestay
          </button>
        </a>
        <a href="/product">
          <button className="px-2 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
            Produk Lokal
          </button>
        </a>
        <a href="/event">
          <button className="px-2 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
            Acara
          </button>
        </a>
        <a href="/gallery">
          <button className="px-2 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
            Galeri Foto
          </button>
        </a>
      </div>
      <div className="flex justify-center mb-[20px]">
        <img src={require("../assets/line5.png")} alt="" />
      </div>
      <div className="flex justify-center mb-[20px]">
        <h6>Copyright 2022 By Ali Dev. All right reserved</h6>
      </div>
    </div>
  );
};

export default Footer;
