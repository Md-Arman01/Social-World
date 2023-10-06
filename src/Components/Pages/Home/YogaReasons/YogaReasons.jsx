const YogaReasons = () => {
  return (
    <div className="bg-[#F5F6F7] h-[700px] flex justify-center items-center">
        <div>
      <h1 className="text-center font-medium text-5xl text-[#45445A] mb-5">
        The Main Reasons to PracticeYoga:
      </h1>
      <div className="grid grid-cols-3 items-center container mx-auto">
        {/* left side container */}
        <div className="space-y-10">
          {/* 1st content */}
          <div className="flex gap-5">
            <div className="text-right">
              <h1 className="text-2xl font-semibold mb-5">
                Good for <span className="text-[#97245F]">Health</span>
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
                Yoga Fit is where you can find balance, harmony and energy. Yoga
                Fit is where you can find balance, harmony and energy
              </p>
            </div>
            <div className="w-16">
              <img
                className="bg-[#97245F] p-2 rounded-full"
                src="https://i.ibb.co/Pcnt9Qd/icons8-yoga-50.png"
                alt=""
              />
            </div>
          </div>
          {/* 2nd content */}
          <div className="flex gap-5">
            <div className="text-right">
              <h1 className="text-2xl font-semibold mb-5">
                Good for <span className="text-[#97245F]">Body</span>
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
                Yoga Fit is where you can gain balance of metabolism. Maintain
                healthy weight, beautiful strong body and control your hunger
              </p>
            </div>
            <div className="w-16">
              <img
                className="bg-[#97245F] p-2 rounded-full"
                src="https://i.ibb.co/mqNZhTY/icons8-yoga-64.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* center container */}
        <div>
          <img
            src="https://i.ibb.co/JjZvJM5/367751-PAYFP8-772-removebg-preview.png"
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
                src="https://i.ibb.co/b2yCV4C/icons8-love-50.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold mb-5">
                Good for <span className="text-[#97245F]">Cardio</span>
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
                Yoga Fit iimproves blood circulation and decreases blood
                pressure of the body. A lower pulse rate helps your heart
              </p>
            </div>
          </div>
          {/* 2nd content */}
          <div className="flex gap-5">
            <div className="w-16">
              <img
                className="bg-[#97245F] p-2 rounded-full"
                src="https://i.ibb.co/qkMtqZR/icons8-breath-50.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold mb-5">
                Good for <span className="text-[#97245F]">Breathing</span>
              </h1>
              <p className="w-[330px] text-base text-[#8a8a8a]">
                Yoga Fit improves your raspiratory by helping your lungs work
                more efficiently. Breathing excercises are a therapy
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default YogaReasons;
