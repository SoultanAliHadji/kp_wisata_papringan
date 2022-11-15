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
          <div className="md:px-4 px-2 border-r-2 border-gray-300">
            <a className="hover:font-bold" href="tourism">
              <button className={window.location.pathname == "/tourism" ? "font-bold" : ""}>Daya Tarik Wisata</button>
            </a>
          </div>
          <div className="md:px-4 px-2 border-r-2 border-gray-300">
            <a className="hover:font-bold" href="/homestay">
              <button className={window.location.pathname == "/homestay" ? "font-bold" : ""}>Homestay</button>
            </a>
          </div>
          <div className="md:px-4 px-2 border-r-2 border-gray-300">
            <a className="hover:font-bold" href="/product">
              <button className={window.location.pathname == "/product" ? "font-bold" : ""}>Produk Lokal</button>
            </a>
          </div>
          <div className="md:px-4 px-2 border-r-2 border-gray-300">
            <a className="hover:font-bold" href="/event">
              <button className={window.location.pathname == "/event" ? "font-bold" : ""}>Acara</button>
            </a>
          </div>
          <div className="md:px-4 px-2 border-gray-300">
            <a className="hover:font-bold" href="/gallery">
              <button className={window.location.pathname == "/gallery" ? "font-bold" : ""}>Galeri Foto</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
