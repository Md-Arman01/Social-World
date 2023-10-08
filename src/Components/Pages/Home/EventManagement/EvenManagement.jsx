import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();



const EventManagement = () => {
  return (
    <div className="bg-[#F5F6F7] h-[700px] flex justify-center items-center">
        <div>
      <h1
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
       className="text-center font-semibold text-5xl text-[#45445A] mb-5">
      Events <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Management</span> 
      </h1>
      <div className="grid grid-cols-3 gap-10 items-center container mx-auto">
        {/* left side container */}
        <div className="flex  justify-end">
              {/* 1st content */}
          <div className="space-y-10">
          <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
           className="flex gap-5">
            <div className="text-right">
              <h1 className="text-2xl font-semibold mb-5">
                <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Friendly</span> Team
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
              This team is known for its warm and approachable attitude, making it easy for team members to communicate, collaborate, and build strong relationships.
              </p>
            </div>
            <div className="w-16">
              <img
                className="bg-[#FF4804] p-2 rounded-full"
                src="https://i.ibb.co/hMsMK0t/icons8-team-50.png"
                alt=""
              />
            </div>
          </div>
          {/* 2nd content */}
          <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
           className="flex gap-5">
            <div className="text-right">
              <h1 className="text-2xl font-semibold mb-5">
              <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Unique</span> Scenario
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
              Dealing with unique scenarios may involve thinking outside the box, adapting to circumstances innovative solutions  advantages presented by the situation.
              </p>
            </div>
            <div className="w-16">
              <img
                className="bg-[#FF4804] p-2 rounded-full"
                src="https://i.ibb.co/0n3Cm84/icons8-champagne-80.png"
                alt=""
              />
            </div>
          </div>
          </div>
          
        </div>
        {/* center container */}
        <div 
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >
          <img
            src="https://i.ibb.co/X31rCh0/replicate-prediction-puvj62rbzllt6antjheduq3dgq-removebg-preview.png"
            alt=""
          />
        </div>
        {/* right side container */}
        <div className="space-y-10">
          {/* 1st content */}
          <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
           className="flex gap-5">
            <div className="w-16">
              <img
                className="bg-[#FF4804] p-2 rounded-full"
                src="https://i.ibb.co/d2bKXF2/icons8-support-50.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold mb-5">
                24/7 Hours <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Support</span>
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
              This level of support is designed to address inquiries, resolve issues, or provide assistance whenever it is needed, regardless of the time or day.
              </p>
            </div>
          </div>
          {/* 2nd content */}
          <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          
          className="flex gap-5">
            <div className="w-16">
              <img
                className="bg-[#FF4804] p-2 rounded-full"
                src="https://i.ibb.co/gPj42pj/icons8-idea-64.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold mb-5">
                Briliant <span className="bg-gradient-to-r from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">Idea</span>
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
              Brilliant ideas can manifest in various fields, including science, technology, business, art, and more. These ideas have the power to inspire.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default EventManagement;
