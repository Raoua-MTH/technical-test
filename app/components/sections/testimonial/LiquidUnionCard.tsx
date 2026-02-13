const LiquidUnionCard = () => {
  return (
    <div className="flex items-center justify-center h-[113px]">
      <div className="relative flex items-center justify-center h-[85px] md:w-[115px] w-[80px]">

        <div className="absolute inset-0 z-0">
          <svg
            viewBox="0 0 140 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-2xl"
          >
            <path

              d="M30,10 
                 H110 
                 A25,25 0 0 1 110,65 
                 H85 
                 C80,65 78,75 70,75 
                 C62,75 60,65 55,65 
                 H30 
                 A25,25 0 0 1 30,10 
                 Z"
              className="fill-white/30 stroke-white/60 stroke-1"
              style={{ backdropFilter: 'blur(16px)' }}
            />
          </svg>
        </div>

        <div className="relative z-10 flex items-center md:gap-2 gap-1 pb-2">
          <div className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] rounded-full border-[2px] border-white bg-panto-orange flex items-center justify-center shadow-lg">
            <svg className="w-[12px] h-[12px]  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="md:w-[24px] md:h-[24px] h-[16px] w-[16px]  rounded-full border-[2px] border-white bg-[#00D6C9] shadow-lg" />
          <div className="md:w-[24px] md:h-[24px] h-[16px] w-[16px] rounded-full border-[2px] border-white bg-[#7c7c7c] shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default LiquidUnionCard;