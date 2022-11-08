import "../../App.css";

const Body = () => {
  return (
    <div className="md:pt-8">
      <div className="mb-28">
        <div className="w-max mb-12">
          <div>
            <h2 className="md:text-[32px] text-[16px] font-semibold mb-2">
              Layanan Fasilitas
            </h2>
          </div>
          <div className="flex justify-center">
            <img
              className="md:w-max w-24 h-max"
              src={require("../../assets/line1.png")}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div className="bg-[#EDECEC] w-[260px] h-36 rounded-[10px] flex justify-center hover:text-[#006839]">
            <div className="flex items-center">
              <div>
                <div className="flex justify-center">
                  <div className="bg-[url('/src/assets/facility_landing_logo1.png')] bg-cover bg-no-repeat hover:bg-[url('/src/assets/facility_landing_hover_logo1.png')] md:w-[80px] w-[60px] md:h-[80px] h-[60px]"></div>
                </div>
                <h4 className="text-center md:text-[16px] text-[14px] font-semibold mt-2">
                  Transportasi
                </h4>
              </div>
            </div>
          </div>
          <div className="bg-[#EDECEC] w-[260px] h-36 rounded-[10px] flex justify-center hover:text-[#006839]">
            <div className="flex items-center">
              <div>
                <div className="flex justify-center">
                  <div className="bg-[url('/src/assets/facility_landing_logo2.png')] bg-cover bg-no-repeat hover:bg-[url('/src/assets/facility_landing_hover_logo2.png')] md:w-[80px] w-[60px] md:h-[80px] h-[60px]"></div>
                </div>
                <h4 className="text-center md:text-[16px] text-[14px] font-semibold mt-2">
                  Pemandu
                </h4>
              </div>
            </div>
          </div>
          <div className="bg-[#EDECEC] w-[260px] h-36 rounded-[10px] flex justify-center hover:text-[#006839]">
            <div className="flex items-center">
              <div>
                <div className="flex justify-center">
                  <div className="bg-[url('/src/assets/facility_landing_logo3.png')] bg-cover bg-no-repeat hover:bg-[url('/src/assets/facility_landing_hover_logo3.png')] md:w-[80px] w-[60px] md:h-[80px] h-[60px]"></div>
                </div>
                <h4 className="text-center md:text-[16px] text-[14px] font-semibold mt-2">
                  Homestay
                </h4>
              </div>
            </div>
          </div>
          <div className="bg-[#EDECEC] w-[260px] h-36 rounded-[10px] flex justify-center hover:text-[#006839]">
            <div className="flex items-center">
              <div>
                <div className="flex justify-center">
                  <div className="bg-[url('/src/assets/facility_landing_logo4.png')] bg-cover bg-no-repeat hover:bg-[url('/src/assets/facility_landing_hover_logo4.png')] md:w-[80px] w-[60px] md:h-[80px] h-[60px]"></div>
                </div>
                <h4 className="text-center md:text-[16px] text-[14px] font-semibold mt-2">
                  Makanan
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-28">
        <div className="w-full mb-12">
          <div className="flex justify-center">
            <h2 className="md:text-[32px] text-[16px] font-semibold mb-2">
              Tentang Kami
            </h2>
          </div>
          <div className="flex justify-center">
            <img
              className="md:w-max w-24 h-max"
              src={require("../../assets/line2.png")}
              alt=""
            />
          </div>
        </div>
        <div className="md:grid grid-cols-11 md:gap-12 md:h-[330px] md:flex md:items-center">
          <div className="col-start-1 col-end-7  md:mb-0 mb-8">
            <p className="text-justify">
              &emsp;&emsp;&emsp; Desa ... merupakan bagian dari kecamatan ...
              yang terletak pada kabupaten Banyumas. Desa ini jdbcehbfurbe udb
              eidnjed ehdy uhduyeb dubduhbdehub fehcb fjhbc hufbcubcdu hecuhde
              bcudhbcu dhbc hbcehc beuhh ucbd ucbd hu cbd hucbhc
              jcnrficnrfubruyvbvrfcb hrfvbrucniec frchfche dijwoks wj idne uechy
              chuyehbuenxi jdenciendxidenx edinedi xndexi ne dxomd xokemx idn
              eiunuinre ei nxedjin xeijxn idxuixjdsi iednx ieunxien kjjjn jnnn
              oninbuvytrtrr hni njnnn o jonjn.
              <br /> &emsp;&emsp;&emsp; Banyumas. Desa ini
              jdbcehbfurbeudbeidnjed ehdyuhduyebdubduh bdehu bfehcb fjhbchufbcub
              cduhecuhdebcu dhbcud hbc hbcehcbe uhh ucbdu cbdh ucbdhucbhc
              jcnrficnrfubruyvbvrfcb hrfvbrucniec frchfchedijwo kswji dne uechy
              chuyehbuenxi jdenciendxidenx edinedixnd exined xomdxo ke mxidn
              eiunuinre ei nxed jinxeijxn idxuixjdsi iednxieunxien kjjjnj nnnon
              inbuv ytrtrr hninj nnno jonjn.
            </p>
          </div>
          <div className="col-start-7 col-end-12 flex md:justify-end justify-center">
            <div className="bg-[url('/src/assets/map_border.png')] bg-cover bg-center bg-no-repeat w-[440px] h-[261px] flex justify-center items-center">
              <img className="bg-gray-300 w-[416px] h-[240px]" src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-28">
        <img
          className="w-full"
          src={require("../../assets/ex_landing_video.png")}
          alt=""
        />
      </div>
      <div className="md:grid grid-cols-7 gap-12">
        <div className="col-start-1 col-end-5 mt-32">
          <div className="grid grid-cols-3 mb-4">
            <div className="col-start-1 col-end-2">
              <input
                className="md:w-44 w-40 px-2 border-2 border-[#006839] rounded-[10px]"
                type="text"
                placeholder="nama"
              />
            </div>
            <div className="col-start-2 col-end-3">
              <input
                className="md:w-44 w-40 px-2 border-2 border-[#006839] rounded-[10px]"
                type="email"
                placeholder="email"
              />
            </div>
          </div>
          <div>
            <textarea
              className="w-full h-[260px] px-2 py-1 border-2 border-[#006839] rounded-[10px] md:mb-0 mb-8"
              name=""
              id=""
              placeholder="Pesan.."
            ></textarea>
          </div>
        </div>
        <div className="col-start-5 col-end-8">
          <div className="w-full mb-12">
            <div className="flex justify-center">
              <h2 className="md:text-[32px] text-[16px] font-semibold mb-2">
                Tinggalkan Pesan
              </h2>
            </div>
            <div className="flex justify-center">
              <img
                className="md:w-max w-24 h-max"
                src={require("../../assets/line3.png")}
                alt=""
              />
            </div>
          </div>
          <div className="md:mt-24">
            <p className="text-justify">
              &emsp;&emsp;&emsp; Kirim kami pesan berisi kritik, saran, atau
              pertanyaan seputar dengan website maupun Kampung Wisata Papringan
              sendiri. Semoga kritik dan saran dari teman-teman pengunjung dapat
              dijadikan sebagai bahan berbenah nantinya agar kami bisa terus
              berkembang. Terima kasih atas kunjungan dan dukungan teman-teman
              sekalian, selamat menikmati momen berwisata di Kampung Wisata
              Papringan!
            </p>
            <div className="flex mt-10 mb-4 text-[12px] italic">
              <p className="font-semibold">Catatan:</p>
              <p>&nbsp; Pesan ditanggapi dalam selambat-lambatnya 3x24 Jam</p>
            </div>
            <button
              className="bg-[#006839] hover:bg-[#004f2b] text-white font-semibold px-4 py-2 rounded-[100px]"
              type="submit"
            >
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
