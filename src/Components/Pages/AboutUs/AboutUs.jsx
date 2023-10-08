import Footer from "../Home/Footer/Footer";

const AboutUs = () => {
  return (
    <>
    {/* banner section */}
    <div className="flex">
      <div>
        <img
          className="w-[800px]"
          src="https://i.ibb.co/MZNgCPT/front-view-man-using-sign-language.jpg"
          alt=""
        />
      </div>
      <div className="py-[120px] px-[96px] bg-[#393651] flex-1">
        <div>
          <p className="text-white text-lg font-semibold mb-3">
            David Swenson
          </p>
          <h1 className="text-6xl font-semibold text-white mb-5">Social World <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Owner</span></h1>
          <div className="flex items-center gap-8 h-36">
            <p className="border border-[#8DD0D3] h-36"></p>

            <div>
              <p className="w-72 text-white text-xl">
                “We provide the best service in the world and our company has a great reputation…”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* teachers section */}
    <div className="my-14">
      <h1 className="text-center font-semibold text-5xl  text-[#45445A] mb-5">
      Our Team <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Manager</span>
      </h1>
      <div className="flex items-center gap-2 justify-center">
        <div>
        <hr className="w-[400px]" />
        </div>
        <img  className="" src="https://i.ibb.co/sQ4GyS6/icons8-people-50.png" alt="" />
        <div>
        <hr className="w-[400px]" />
        </div>
      </div>
      <p className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-lg text-center mb-10">Best Manager Are Here For You</p>
    </div>
    {/* card container */}
    <div className="grid grid-cols-3 gap-5 container mx-auto my-20">
      {/* card 1 */}
      <div className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/VmQxrPB/young-happy-man-standing-isolated.jpg" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Rodney Yee
          </h4>
          <p className="block bg-gradient-to-r from-[#FFA828] to-[#FF4804] bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            Senior Manager
          </p>
        </div>
      </div>
      {/* card 2 */}
      <div className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/ng7XjT0/replicate-prediction-zvcm2ubb4qsltvoeavdvewzqrm.png" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Sri Dharma Mittra
          </h4>
          <p className="block bg-gradient-to-r from-[#FFA828] to-[#FF4804] bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            Senior Manager
          </p>
        </div>
      </div>
      {/* card 3 */}
      <div className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/bmwRhw9/replicate-prediction-65twwfzb7xlep4qucdz3emsuo4.png" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Alan Finger
          </h4>
          <p className="block bg-gradient-to-r from-[#FFA828] to-[#FF4804] bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            Senior Manager
          </p>
        </div>
      </div>
      {/* card 4 */}
      <div className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/2gpZsQp/man-posing-indoors-climbing-arena.jpg" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          ichard Freeman
          </h4>
          <p className="block bg-gradient-to-r from-[#FFA828] to-[#FF4804] bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            Senior Manager
          </p>
        </div>
      </div>
      {/* card 5 */}
      <div className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/gWFBwr1/replicate-prediction-dmjf3gbbgw4l6dk6qjfy462sbe.png" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Tim Miller
          </h4>
          <p className="block bg-gradient-to-r from-[#FFA828] to-[#FF4804] bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            Senior Manager
          </p>
        </div>
      </div>
      {/* card 6 */}
      <div className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/MZNgCPT/front-view-man-using-sign-language.jpg" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          David Swenson
          </h4>
          <p className="block bg-gradient-to-r from-[#FFA828] to-[#FF4804] bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          CEO / Social World
          </p>
        </div>
      </div>
    </div>
    {/* footer section */}
    <Footer></Footer>
    </>
  );
};

export default AboutUs;
