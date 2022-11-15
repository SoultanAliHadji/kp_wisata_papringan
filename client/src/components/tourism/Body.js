import "../../App.css";

const Body = () => {
  return (
    <div className="md:pt-8 pt-12">
      <div className="w-max md:mb-8 mb-6">
        <div>
          <h2 className="md:text-[32px] text-[16px] font-semibold mb-2">
            Wisata Di Papringan
          </h2>
        </div>
        <div className="flex justify-center">
          <img
            className="md:w-max w-24 h-max"
            src={require("../../assets/line7.png")}
            alt=""
          />
        </div>
      </div>
      <div className="md:grid grid-cols-2 gap-y-8">
        <div className="flex justify-center">
          <button className="rounded-[10px] px-2 md:py-6 md:pb-0 pb-4">
            <div className=" grid grid-cols-2">
              <div></div>
              <div className="flex justify-center">
                <h4 className="text-[16px] font-semibold px-2 pb-4 underline">
                  Nama Obyek Wisata
                </h4>
              </div>
            </div>
            <div className=" grid grid-cols-2">
              <div className="flex items-center">
                <div className="pl-2">
                  <img
                    className="rounded-[4px]"
                    src={require("../../assets/ex_tourism_object.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="p-2">
                <p className="text-justify">
                  &emsp; Deskripsi singkat mengenai obyek wisata, dapat mengenai
                  suasananya, apa saja yang ditawarkan, apa manfaatnya, dan lain
                  sebagainya..
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="rounded-[10px] px-2 md:py-6 md:pb-0 pb-4">
            <div className=" grid grid-cols-2">
              <div></div>
              <div className="flex justify-center">
                <h4 className="text-[16px] font-semibold px-2 pb-4 underline">
                  Nama Obyek Wisata
                </h4>
              </div>
            </div>
            <div className=" grid grid-cols-2">
              <div className="flex items-center">
                <div className="pl-2">
                  <img
                    className="rounded-[4px]"
                    src={require("../../assets/ex_tourism_object.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="p-2">
                <p className="text-justify">
                  &emsp; Deskripsi singkat mengenai obyek wisata, dapat mengenai
                  suasananya, apa saja yang ditawarkan, apa manfaatnya, dan lain
                  sebagainya..
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="rounded-[10px] px-2 md:py-6 md:pb-0 pb-4">
            <div className=" grid grid-cols-2">
              <div></div>
              <div className="flex justify-center">
                <h4 className="text-[16px] font-semibold px-2 pb-4 underline">
                  Nama Obyek Wisata
                </h4>
              </div>
            </div>
            <div className=" grid grid-cols-2">
              <div className="flex items-center">
                <div className="pl-2">
                  <img
                    className="rounded-[4px]"
                    src={require("../../assets/ex_tourism_object.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="p-2">
                <p className="text-justify">
                  &emsp; Deskripsi singkat mengenai obyek wisata, dapat mengenai
                  suasananya, apa saja yang ditawarkan, apa manfaatnya, dan lain
                  sebagainya..
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="rounded-[10px] px-2 md:py-6">
            <div className=" grid grid-cols-2">
              <div></div>
              <div className="flex justify-center">
                <h4 className="text-[16px] font-semibold px-2 pb-4 underline">
                  Nama Obyek Wisata
                </h4>
              </div>
            </div>
            <div className=" grid grid-cols-2">
              <div className="flex items-center">
                <div className="pl-2">
                  <img
                    className="rounded-[4px]"
                    src={require("../../assets/ex_tourism_object.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="p-2">
                <p className="text-justify">
                  &emsp; Deskripsi singkat mengenai obyek wisata, dapat mengenai
                  suasananya, apa saja yang ditawarkan, apa manfaatnya, dan lain
                  sebagainya..
                </p>
              </div>
            </div>
          </button>
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
        <button className="px-4 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
          4
        </button>
        <button className="px-4 py-1 border border-[#006839] rounded-[100px] font-semibold hover:bg-[#006839] hover:text-white">
          5
        </button>
      </div>
    </div>
  );
};

export default Body;
