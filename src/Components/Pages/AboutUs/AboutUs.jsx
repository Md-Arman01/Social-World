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
          <p className="text-[#C4D114] text-lg font-semibold mb-3">
            David Swenson
          </p>
          <h1 className="text-6xl text-white mb-5">Yoga Studio Owner</h1>
          <div className="flex items-center gap-8 h-36">
            <p className="border border-[#8DD0D3] h-36"></p>

            <div>
              <p className=" text-white text-xl">
                “Curabitur blandit tempus porttitor. Aenean lacinia bibendum
                nulla sed consectetur. Nullam id dolor id nibh…”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* teachers section */}
    <div className="my-14">
      <h1 className="text-center font-medium text-5xl text-[#45445A] mb-5">
      Our Teachers
      </h1>
      <div className="flex items-center gap-2 justify-center">
        <div>
        <hr className="w-[400px]" />
        </div>
        <img  className="" src="https://i.ibb.co/TvwsVqV/icons8-lotus-48.png" alt="" />
        <div>
        <hr className="w-[400px]" />
        </div>
      </div>
      <p className="text-[#97245F] text-lg text-center mb-10">Best Yoga Teachers are Here for You</p>
    </div>
    {/* card container */}
    <div className="grid grid-cols-3 gap-5 container mx-auto my-20">
      {/* card 1 */}
      <div className="relative flex  flex-col rounded-xl bg-pink-100 bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/VmQxrPB/young-happy-man-standing-isolated.jpg" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Rodney Yee
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            Senior Instructor
          </p>
        </div>
      </div>
      {/* card 2 */}
      <div className="relative flex  flex-col rounded-xl bg-pink-100 bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/h16jRHM/before-workout-bearded-man-holdinga-mat-workout.jpg" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Sri Dharma Mittra
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            Senior Instructor
          </p>
        </div>
      </div>
      {/* card 3 */}
      <div className="relative flex  flex-col rounded-xl bg-pink-100 bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/W2JQ05g/relaxed-guy-meditating.jpg" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Alan Finger
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            Senior Instructor
          </p>
        </div>
      </div>
      {/* card 4 */}
      <div className="relative flex  flex-col rounded-xl bg-pink-100 bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/2gpZsQp/man-posing-indoors-climbing-arena.jpg" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          ichard Freeman
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            Senior Instructor
          </p>
        </div>
      </div>
      {/* card 5 */}
      <div className="relative flex  flex-col rounded-xl bg-pink-100 bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/CJSckfX/korean-young-man-s-portrait-male-model-white-shirt-smiling-showing-sign-ok-concept-human-emotions-fa.jpg" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Tim Miller
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            Senior Instructor
          </p>
        </div>
      </div>
      {/* card 6 */}
      <div className="relative flex  flex-col rounded-xl bg-pink-100 bg-clip-border text-gray-700 shadow-md">
        <div className="mx-auto mt-7">
          <img className="w-48 h-48 rounded-full object-cover" src="https://i.ibb.co/MZNgCPT/front-view-man-using-sign-language.jpg" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          David Swenson
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          CEO / Yoga-Studio
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
