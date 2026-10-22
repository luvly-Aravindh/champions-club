import logo from "../assets/sw-logo.svg";

const HeroSection = () => {
  const today = new Date();
  today.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  // Spots left: starts at 12 on 1 Jan 2026 and drops by one every 4 days, never below 3.
  const totalSpots = 12;
  const minSpots = 3;
  const daysSinceStart = Math.floor((today - new Date("2026-01-01")) / (1000 * 60 * 60 * 24));
  const spotsTaken = Math.floor(daysSinceStart / 4);
  const spotsLeft = Math.max(totalSpots - spotsTaken, minSpots);

  return (
    <section className="w-full bg-black text-white pb-16 font-inter">
      {/* Top strip */}
      <div className="bg-[#C6AA4F] text-black py-2 font-semibold text-[10px] sm:text-sm text-center px-2">
        {"UNLOCK YOUR "}
        <span className="text-red-600 font-bold">BAND 8+</span>
        {" | Early Applicants Get Priority Mentor Access!"}
      </div>

      {/* Logo + attention pill */}
      <div className="mt-6 max-w-7xl mx-auto px-2 sm:px-4 relative">
        <div className="hidden sm:flex items-center justify-between relative">
          <img src={logo} alt="Southwords IELTS" className="w-28 sm:w-40" />
          <div className="absolute left-1/2 -translate-x-1/2 bg-[#3e3e3e] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 whitespace-nowrap">
            <span className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600" />
            </span>
            ATTENTION: EVERY IELTS ASPIRANT WHO WANTS TO HIT BAND 8+ IN JUST 25 DAYS
          </div>
          <div className="w-28 sm:w-40" />
        </div>
        <div className="sm:hidden flex flex-col items-center gap-3">
          <img src={logo} alt="Southwords IELTS" className="w-28" />
          <div className="bg-[#3e3e3e] text-white px-3 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-2 text-center">
            <span className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600" />
            </span>
            ATTENTION: EVERY IELTS ASPIRANT WHO WANTS TO HIT BAND 8+ IN JUST 25 DAYS
          </div>
        </div>
      </div>

      <h1 className="mt-14 text-3xl sm:text-[90px] font-extrabold leading-tight md:leading-[100px] text-center px-3">
        Are you looking to score Band 8+ in IELTS & finally fly to your dream country in 2026?
      </h1>
      <p className="max-w-4xl mx-auto mt-6 text-gray-200 text-sm sm:text-lg px-4 text-center">
        Join my <span className="font-bold text-[#C6AA4F]">IELTS Champions Club Program</span> & I’ll show
        you exactly how to do that!
      </p>

      {/* Wistia video */}
      <div className="max-w-3xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg px-2 sm:px-0">
        <div className="relative w-full pb-[56.25%] bg-black">
          <iframe
            src="https://fast.wistia.net/embed/iframe/i04yiuq7ag?seo=false&videoFoam=true"
            title="IELTS Champions Club Video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            playsInline
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <a
          href="https://calendly.com/ganesh-southwardsielts/30min"
          className="inline-block bg-red-600 text-white font-bold text-sm sm:text-xl px-6 sm:px-10 py-4 mt-8 rounded-full shadow-[0_6px_0_#fff] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-1 active:shadow-[0_3px_0_#9e822f]"
        >
          Book Your No Obligation Admission Call Now
        </a>
      </div>

      {/* Spots bar */}
      <div className="flex justify-center mt-8 px-3">
        <div className="flex gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <span className="w-1.5 h-3 sm:w-3 sm:h-6 bg-[#C6AA4F] rounded-[2px]" key={i} />
          ))}
          <span className="w-1.5 h-3 sm:w-3 sm:h-6 rounded-[2px] bg-[#C6AA4F] animate-pulse" />
          <span className="w-1.5 h-3 sm:w-3 sm:h-6 rounded-[2px] bg-[#C6AA4F] animate-pulse [animation-delay:200ms]" />
          <span className="w-1.5 h-3 sm:w-3 sm:h-6 rounded-[2px] bg-[#C6AA4F] animate-pulse [animation-delay:400ms]" />
          {Array.from({ length: 14 }).map((_, i) => (
            <span className="w-1.5 h-3 sm:w-3 sm:h-6 bg-gray-300 rounded-[2px]" key={`empty-${i}`} />
          ))}
        </div>
      </div>
      <p className="mt-6 text-[#C6AA4F] font-semibold uppercase text-xs sm:text-base px-4 text-center max-w-4xl mx-auto">
        HURRY! Only <span className="text-red-500 font-bold">{spotsLeft.toString().padStart(2, "0")}</span> spots
        left for the Upcoming Batch
      </p>
    </section>
  );
};

export default HeroSection;
