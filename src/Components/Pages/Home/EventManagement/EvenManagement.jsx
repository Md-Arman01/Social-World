const EventManagement = () => {
  return (
    <div className="bg-[#F5F6F7] h-[700px] flex justify-center items-center">
        <div>
      <h1 className="text-center font-medium text-5xl text-[#45445A] mb-5">
      Events Management
      </h1>
      <div className="grid grid-cols-3 gap-10 items-center container mx-auto">
        {/* left side container */}
        <div className="flex  justify-end">
              {/* 1st content */}
          <div className="space-y-10">
          <div className="flex gap-5">
            <div className="text-right">
              <h1 className="text-2xl font-semibold mb-5">
                Friendly Team
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
              This team is known for its warm and approachable attitude, making it easy for team members to communicate, collaborate, and build strong relationships.
              </p>
            </div>
            <div className="w-16">
              <img
                className="bg-[#97245F] p-2 rounded-full"
                src="https://i.ibb.co/hMsMK0t/icons8-team-50.png"
                alt=""
              />
            </div>
          </div>
          {/* 2nd content */}
          <div className="flex gap-5">
            <div className="text-right">
              <h1 className="text-2xl font-semibold mb-5">
                Unique Scenario
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
              Dealing with unique scenarios may involve thinking outside the box, adapting to circumstances innovative solutions  advantages presented by the situation.
              </p>
            </div>
            <div className="w-16">
              <img
                className="bg-[#97245F] p-2 rounded-full"
                src="https://i.ibb.co/0n3Cm84/icons8-champagne-80.png"
                alt=""
              />
            </div>
          </div>
          </div>
          
        </div>
        {/* center container */}
        <div>
          <img
            src="https://i.ibb.co/X31rCh0/replicate-prediction-puvj62rbzllt6antjheduq3dgq-removebg-preview.png"
            alt=""
          />
        </div>
        {/* right side container */}
        <div className="space-y-10">
          {/* 1st content */}
          <div className="flex gap-5">
            <div className="w-16">
              <img
                className="bg-[#97245F] p-2 rounded-full"
                src="https://i.ibb.co/d2bKXF2/icons8-support-50.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold mb-5">
                24/7 Hours Support
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
              This level of support is designed to address inquiries, resolve issues, or provide assistance whenever it is needed, regardless of the time or day.
              </p>
            </div>
          </div>
          {/* 2nd content */}
          <div className="flex gap-5">
            <div className="w-16">
              <img
                className="bg-[#97245F] p-2 rounded-full"
                src="https://i.ibb.co/gPj42pj/icons8-idea-64.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold mb-5">
                Briliant Idea
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
