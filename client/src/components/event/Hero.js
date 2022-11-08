import "../../App.css";

const Hero = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="flex">
            <h1 className="md:text-[52px] text-[24px] font-semibold">
              Temukan
            </h1>
            <h2 className="md:text-[32px] text-[16px] font-semibold ml-2 mt-[23px]">
              Informasi
            </h2>
          </div>
          <div>
            <h2 className="md:text-[32px] text-[16px] font-semibold">
              Acara Seru Yang Diadakan Di
            </h2>
            <div className="flex">
              <h2 className="md:text-[32px] text-[16px] font-semibold">
                Kampung Wisata
              </h2>
              <h2 className="md:text-[32px] text-[16px] font-semibold text-[#006839] ml-2">
                Papringan
              </h2>
            </div>
          </div>
          <div className="flex mt-40 text-[12px] italic">
            <p className="font-semibold">Catatan:</p>
            <p>&nbsp; Pemesanan Tiket Tidak Dilakukan Melalui Website!!</p>
          </div>
        </div>
        <div>
            <img src={require("../../assets/event_hero_img.png")} alt="" />
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <img src={require("../../assets/line10.png")} alt="" />
      </div>
    </div>
  );
};

export default Hero;
