import Footer from "../Home/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const AboutUs = () => {
  return (
    <>
      {/* banner section */}
      <div className="lg:flex">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false">
          <img
            className="lg:w-[800px]"
            src="https://i.ibb.co/gR684n3/Pi7-Image-front-view-man-using-sign-language.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="py-10 md:py-[120px] px-10 md:px-[96px] bg-[#393651] flex-1">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <p className="text-white text-lg font-semibold mb-3">
              David Swenson
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-5">
              Social World <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
                 Owner
              </span>
            </h1>
            <div className="flex items-center gap-8 h-28 md:h-36">
              <p className="border border-[#8DD0D3] h-28 md:h-36"></p>

              <div>
                <p className="w-72 text-white text-lg md:text-xl">
                  “We provide the best service in the world and our company has
                  a great reputation…”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* manager  section */}
      <div
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="my-5 md:my-9 lg:my-14">
        <h1 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl  text-[#45445A] lg:mb-5">
          Our Team{" "}
          <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
            Manager
          </span>
        </h1>
        <div className="flex items-center gap-2 justify-center">
          <div>
            <hr className="w-[130px] md:w-[200px] lg:w-[400px]" />
          </div>
          <img
            className=""
            src="https://i.ibb.co/sQ4GyS6/icons8-people-50.png"
            alt=""
          />
          <div>
            <hr className="w-[130px] md:w-[200px] lg:w-[400px]" />
          </div>
        </div>
        <p className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text text-sm md:text-base lg:text-lg text-center mb-10">
          Best Manager Are Here For You
        </p>
      </div>
      {/* card container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 lg:px-0 container mx-auto my-5 md:my-10 lg:my-20">
        {/* card 1 */}
        <div
          data-aos="fade-down-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
          <div className="mx-auto mt-7">
            <img
              className="w-48 h-48 rounded-full object-cover"
              src="https://i.ibb.co/prG5fF3/Pi7-Image-young-happy-man-standing-isolated.jpg"
            />
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
        <div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
          <div className="mx-auto mt-7">
            <img
              className="w-48 h-48 rounded-full object-cover"
              src="https://i.ibb.co/417KGDd/Pi7-Image-replicate-prediction-zvcm2ubb4qsltvoeavdvewzqrm.png"
            />
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
        <div
          data-aos="fade-down-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
          <div className="mx-auto mt-7">
            <img
              className="w-48 h-48 rounded-full object-cover"
              src="https://i.ibb.co/LRmfVfZ/Pi7-Image-replicate-prediction-65twwfzb7xlep4qucdz3emsuo4.png"
            />
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
        <div
          data-aos="fade-up-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
          <div className="mx-auto mt-7">
            <img
              className="w-48 h-48 rounded-full object-cover"
              src="https://i.ibb.co/DfK0JYY/Pi7-Image-man-posing-indoors-climbing-arena.jpg"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Ichard Freeman
            </h4>
            <p className="block bg-gradient-to-r from-[#FFA828] to-[#FF4804] bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Senior Manager
            </p>
          </div>
        </div>
        {/* card 5 */}
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
          <div className="mx-auto mt-7">
            <img
              className="w-48 h-48 rounded-full object-cover"
              src="https://i.ibb.co/FhDmCVv/Pi7-Image-replicate-prediction-dmjf3gbbgw4l6dk6qjfy462sbe.png"
            />
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
        <div
          data-aos="fade-up-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="relative flex  flex-col rounded-xl bg-[#f8f6ee] bg-clip-border text-gray-700 shadow-md">
          <div className="mx-auto mt-7">
            <img
              className="w-48 h-48 rounded-full object-cover"
              src="https://i.ibb.co/gR684n3/Pi7-Image-front-view-man-using-sign-language.jpg"
            />
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
