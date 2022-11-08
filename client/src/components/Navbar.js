import "../App.css";

const Navbar = () => {
  return (
    <div className="py-2">
      <div className="md:grid grid-cols-12 md:text-[14px] text-[12px]">
        <div className="col-start-1 col-end-3 md:flex md:justify-start flex justify-center md:mb-0 mb-4">
          <div className="w-36">
            <a href="/">
              <img src={require("../assets/logo1.png")} alt="" />
            </a>
          </div>
        </div>
        <div className="col-start-3 col-end-11 flex justify-center items-center font-semibold">
          <div className="px-4 border-r-2 border-gray-300">
            <a className="hover:font-bold" href="tourism">
              <button>Daya Tarik Wisata</button>
            </a>
          </div>
          <div className="px-4 border-r-2 border-gray-300">
            <a className="hover:font-bold" href="/homestay">
              <button>Homestay</button>
            </a>
          </div>
          <div className="px-4 border-r-2 border-gray-300">
            <a className="hover:font-bold" href="/product">
              <button>Produk Lokal</button>
            </a>
          </div>
          <div className="px-4 border-r-2 border-gray-300">
            <a className="hover:font-bold" href="/event">
              <button>Acara</button>
            </a>
          </div>
          <div className="px-4 border-gray-300">
            <a className="hover:font-bold" href="/gallery">
              <button>Galeri Foto</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
