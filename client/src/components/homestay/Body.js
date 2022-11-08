import "../../App.css";

const Body = () => {
  return (
    <div className="mt-12">
      <div className="w-full mb-12">
        <div className="flex justify-center">
          <h2 className="md:text-[32px] text-[16px] font-semibold mb-2">
            Homestay Tersedia
          </h2>
        </div>
        <div className="flex justify-center">
          <img
            className="md:w-max w-24 h-max"
            src={require("../../assets/line8.png")}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-6">
            <div>
              <div className="mb-1">
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img1.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1">
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img2.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img3.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img4.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img5.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-start-6 col-end-13">
            <div className="mb-2">
              <h4 className="text-[16px] font-semibold">Nama Homestay</h4>
            </div>
            <div className="mb-2">
              <div>
                <p className="text-justify">
                  &emsp;&emsp;&emsp; Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting:
                </p>
              </div>
              <div>
                <ul className="list-disc ml-4">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 flex mb-2">
              <div className="flex">
                <p>Harga mulai dari:</p>
                <p className="font-semibold">&nbsp; Rp125.000,00/malam</p>
              </div>
              <div>
                <p className="text-end">Lokasi Lengkap</p>
              </div>
            </div>
            <div className="">
              <a href="">
                <button className="bg-[#006839] hover:bg-[#004f2b] text-white font-semibold px-4 py-2 rounded-[100px]">
                  Pesan Sekarang
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-6">
            <div>
              <div className="mb-1">
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img1.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1">
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img2.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img3.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img4.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img5.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-start-6 col-end-13">
            <div className="mb-2">
              <h4 className="text-[16px] font-semibold">Nama Homestay</h4>
            </div>
            <div className="mb-2">
              <div>
                <p className="text-justify">
                  &emsp;&emsp;&emsp; Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting:
                </p>
              </div>
              <div>
                <ul className="list-disc ml-4">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 flex mb-2">
              <div className="flex">
                <p>Harga mulai dari:</p>
                <p className="font-semibold">&nbsp; Rp125.000,00/malam</p>
              </div>
              <div>
                <p className="text-end">Lokasi Lengkap</p>
              </div>
            </div>
            <div className="">
              <a href="">
                <button className="bg-[#006839] hover:bg-[#004f2b] text-white font-semibold px-4 py-2 rounded-[100px]">
                  Pesan Sekarang
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-6">
            <div>
              <div className="mb-1">
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img1.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1">
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img2.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img3.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img4.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img5.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-start-6 col-end-13">
            <div className="mb-2">
              <h4 className="text-[16px] font-semibold">Nama Homestay</h4>
            </div>
            <div className="mb-2">
              <div>
                <p className="text-justify">
                  &emsp;&emsp;&emsp; Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting:
                </p>
              </div>
              <div>
                <ul className="list-disc ml-4">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 flex mb-2">
              <div className="flex">
                <p>Harga mulai dari:</p>
                <p className="font-semibold">&nbsp; Rp125.000,00/malam</p>
              </div>
              <div>
                <p className="text-end">Lokasi Lengkap</p>
              </div>
            </div>
            <div className="">
              <a href="">
                <button className="bg-[#006839] hover:bg-[#004f2b] text-white font-semibold px-4 py-2 rounded-[100px]">
                  Pesan Sekarang
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-6">
            <div>
              <div className="mb-1">
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img1.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1">
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img2.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img3.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img4.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img5.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-start-6 col-end-13">
            <div className="mb-2">
              <h4 className="text-[16px] font-semibold">Nama Homestay</h4>
            </div>
            <div className="mb-2">
              <div>
                <p className="text-justify">
                  &emsp;&emsp;&emsp; Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting:
                </p>
              </div>
              <div>
                <ul className="list-disc ml-4">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 flex mb-2">
              <div className="flex">
                <p>Harga mulai dari:</p>
                <p className="font-semibold">&nbsp; Rp125.000,00/malam</p>
              </div>
              <div>
                <p className="text-end">Lokasi Lengkap</p>
              </div>
            </div>
            <div className="">
              <a href="">
                <button className="bg-[#006839] hover:bg-[#004f2b] text-white font-semibold px-4 py-2 rounded-[100px]">
                  Pesan Sekarang
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-6">
            <div>
              <div className="mb-1">
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img1.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-1">
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img2.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img3.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img4.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded-[10px]"
                  src={require("../../assets/homestay_img5.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-start-6 col-end-13">
            <div className="mb-2">
              <h4 className="text-[16px] font-semibold">Nama Homestay</h4>
            </div>
            <div className="mb-2">
              <div>
                <p className="text-justify">
                  &emsp;&emsp;&emsp; Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting:
                </p>
              </div>
              <div>
                <ul className="list-disc ml-4">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 flex mb-2">
              <div className="flex">
                <p>Harga mulai dari:</p>
                <p className="font-semibold">&nbsp; Rp125.000,00/malam</p>
              </div>
              <div>
                <p className="text-end">Lokasi Lengkap</p>
              </div>
            </div>
            <div className="">
              <a href="">
                <button className="bg-[#006839] hover:bg-[#004f2b] text-white font-semibold px-4 py-2 rounded-[100px]">
                  Pesan Sekarang
                </button>
              </a>
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
