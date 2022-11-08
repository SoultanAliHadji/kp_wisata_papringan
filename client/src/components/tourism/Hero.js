import "../../App.css";

const Hero = () => {
  return (
    <div className="mt-12">
      <div className="w-full mb-12">
        <div className="flex justify-center">
          <h2 className="md:text-[32px] text-[16px] font-semibold mb-2">
            Paket Wisata
          </h2>
        </div>
        <div className="flex justify-center">
          <img
            className="md:w-max w-24 h-max"
            src={require("../../assets/line6.png")}
            alt=""
          />
        </div>
      </div>
      <div className="md:h-[384px] h-[340px] flex justify-center">
        <div className="bg-[url(/src/assets/package_border.png)] bg-cover bg-center md:w-[780px] w-[694px] md:h-[360px] h-80 flex justify-center items-center gap-2 grid grid-rows-9">
          <div className="items-center border-2 border-[#CD7F32] rounded-[10px] w-[184px] h-[260px] row-start-1 row-end-9 mb-[-40px]">
            <div className="flex items-center py-2 mx-2 border-b-2 border-[#CD7F32]">
              <img
                className="w-10 h-10"
                src={require("../../assets/package_logo1.png")}
                alt=""
              />
              <div className="ml-2">
                <p className="font-bold">Bronze</p>
                <p>Rp.200k / org</p>
              </div>
            </div>
            <div className="w-full h-[140px] my-2 mx-2">
              <div className="flex">
                <p className="font-bold">✓</p>
                <p>&nbsp; Blablabla</p>
              </div>
              <div className="flex">
                <p className="font-bold">✓</p>
                <p>&nbsp; Blablabla</p>
              </div>
              <div className="flex">
                <p className="font-bold">✓</p>
                <p>&nbsp; Blablabla</p>
              </div>
            </div>
            <div className="flex justify-end px-2">
              <button className="bg-[#CD7F32] w-8 h-8 rounded-[100px] font-bold text-white text-[24px]">
                +
              </button>
            </div>
          </div>
          <div className="items-center border-2 border-[#FFD700] rounded-[10px] w-[220px] h-[300px] row-start-1 row-end-9 mb-[-40px]">
            <div className="flex items-center py-2 mx-2 border-b-2 border-[#FFD700]">
              <img
                className="w-10 h-10"
                src={require("../../assets/package_logo2.png")}
                alt=""
              />
              <div className="ml-2">
                <p className="font-bold">Bronze</p>
                <p>Rp.200k / org</p>
              </div>
            </div>
            <div className="w-full h-[180px] my-2 mx-2">
              <div className="flex">
                <p className="font-bold">✓</p>
                <p>&nbsp; Blablabla</p>
              </div>
              <div className="flex">
                <p className="font-bold">✓</p>
                <p>&nbsp; Blablabla</p>
              </div>
              <div className="flex">
                <p className="font-bold">✓</p>
                <p>&nbsp; Blablabla</p>
              </div>
            </div>
            <div className="flex justify-end px-2">
              <button className="bg-[#FFD700] w-8 h-8 rounded-[100px] font-bold text-white text-[24px]">
                +
              </button>
            </div>
          </div>
          <div className="items-center border-2 border-[#C0C0C0] rounded-[10px] w-[184px] h-[260px] row-start-1 row-end-9 mb-[-40px]">
            <div className="flex items-center py-2 mx-2 border-b-2 border-[#C0C0C0]">
              <img
                className="w-10 h-10"
                src={require("../../assets/package_logo3.png")}
                alt=""
              />
              <div className="ml-2">
                <p className="font-bold">Bronze</p>
                <p>Rp.200k / org</p>
              </div>
            </div>
            <div className="w-full h-[140px] my-2 mx-2">
              <div className="flex">
                <p className="font-bold">✓</p>
                <p>&nbsp; Blablabla</p>
              </div>
              <div className="flex">
                <p className="font-bold">✓</p>
                <p>&nbsp; Blablabla</p>
              </div>
              <div className="flex">
                <p className="font-bold">✓</p>
                <p>&nbsp; Blablabla</p>
              </div>
            </div>
            <div className="flex justify-end px-2">
              <button className="bg-[#C0C0C0] w-8 h-8 rounded-[100px] font-bold text-white text-[24px]">
                +
              </button>
            </div>
          </div>
          <div className="row-start-9 row-end-10 mx-[-64px] mb-[-8px] flex text-[12px] italic">
            <p className="font-bold">Catatan:</p>
            <p>&nbsp; Harga dapat berubah sewaktu-waktu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
