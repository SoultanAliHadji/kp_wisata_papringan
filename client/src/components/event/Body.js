import "../../App.css";

const Body = () => {
  return (
    <div className="md:pt-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div>
          <div className="grid grid-cols-2 mb-4">
            <h4 className="text-start md:text-[16px] text-[14px] font-semibold">
              Nama Acara
            </h4>
            <div className="flex justify-end items-center">
              <p>02 Januari 2023</p>
            </div>
          </div>
          <div className="w-full h-[252px] bg-[#EDECEC] flex justify-center items-center rounded-[10px]">
            <img
              className="h-full rounded-[10px]"
              src={require("../../assets/ex_event_img.png")}
              alt=""
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-[#006839] hover:bg-[#004f2b] text-white font-semibold px-4 py-2 rounded-[100px]"
              type="submit"
            >
              Tanyakan Info
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 mb-4">
            <h4 className="text-start md:text-[16px] text-[14px] font-semibold">
              Nama Acara
            </h4>
            <div className="flex justify-end items-center">
              <p>02 Januari 2023</p>
            </div>
          </div>
          <div className="w-full h-[252px] bg-[#EDECEC] flex justify-center items-center rounded-[10px]">
            <img
              className="h-full rounded-[10px]"
              src={require("../../assets/ex_event_img.png")}
              alt=""
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-[#006839] hover:bg-[#004f2b] text-white font-semibold px-4 py-2 rounded-[100px]"
              type="submit"
            >
              Tanyakan Info
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 mb-4">
            <h4 className="text-start md:text-[16px] text-[14px] font-semibold">
              Nama Acara
            </h4>
            <div className="flex justify-end items-center">
              <p>02 Januari 2023</p>
            </div>
          </div>
          <div className="w-full h-[252px] bg-[#EDECEC] flex justify-center items-center rounded-[10px]">
            <img
              className="h-full rounded-[10px]"
              src={require("../../assets/ex_event_img.png")}
              alt=""
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-[#006839] hover:bg-[#004f2b] text-white font-semibold px-4 py-2 rounded-[100px]"
              type="submit"
            >
              Tanyakan Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
