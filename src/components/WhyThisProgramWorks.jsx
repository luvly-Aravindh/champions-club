import profileImage from "../assets/why-should-profile.png";

const reasons = [
  "Each session follows a day-by-day curriculum, so you always know exactly what to do next.",
  "You’ll learn directly from me and my team, who reveal how IELTS is really evaluated - not what random tip videos claim.",
  "Your writing and speaking are reviewed individually with targeted feedback that removes guesswork.",
  "You’ll see your progress build week by week through mocks, insights, and performance tracking.",
];

const WhyThisProgramWorks = () => (
  <section className="relative w-full text-white py-12 sm:py-16 sm:px-4 px-0 font-inter bg-black">
    <div className="absolute inset-0 flex justify-center" style={{ pointerEvents: "none" }}>
      <div className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#d1b35d]/20 blur-[150px] sm:blur-[200px] rounded-full" />
    </div>

    <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-center md:text-left">
          {"Why This "}
          <br />
          {" Program Works"}
        </h2>
        <img
          src={profileImage}
          alt="Profile"
          className="w-full max-w-xs sm:max-w-sm rounded-xl shadow-2xl border border-[#ffffff20]"
        />
        <div className="mt-4 bg-[#111] border border-[#C6AA4F50] rounded-xl px-5 py-4 shadow-[0_0_15px_#C6AA4F40] text-center w-full max-w-xs sm:max-w-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-[#C6AA4F]">CA Ganesh Buguidi</h3>
          <p className="text-gray-300 text-sm sm:text-base mt-1">FOUNDER & CEO</p>
          <div className="mt-3 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#C6AA4F] to-transparent mx-auto" />
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <p className="text-gray-200 text-base sm:text-lg text-center md:text-left">
          Most IELTS courses throw content at you and hope something sticks. I do the opposite.
        </p>
        <p className="text-gray-200 text-base sm:text-lg text-center md:text-left">
          Over the last decade, I’ve built a clear, structured path that takes you from where you are now
          to confidently hitting Band 8+.
        </p>
        <p className="text-gray-200 text-base sm:text-lg text-center md:text-left">
          You're not left to figure things out alone.
        </p>
        {reasons.map((reason, i) => (
          <div className="flex items-start gap-3 sm:gap-6" key={i}>
            <span className="text-3xl sm:text-4xl font-bold leading-none pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="border border-[#c6aa4f65] bg-black/40 rounded-xl p-4 sm:p-5 w-full text-gray-200 text-sm sm:text-base">
              {reason}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative text-center max-w-3xl mx-auto mt-12 sm:mt-16 text-gray-200 text-sm sm:text-lg leading-relaxed">
      And perhaps most importantly this isn’t a “watch and hope” program. It’s an immersive, guided sprint
      designed to move you decisively from your current band to Band 8+.
    </div>

    <div className="mt-6 sm:mt-8 flex justify-center relative">
      <a
        href="https://calendly.com/ganesh-southwardsielts/30min"
        className={`px-3 sm:px-10 py-3 sm:py-4 rounded-full bg-red-600  text-white font-bold 
          text-sm sm:text-lg shadow-[0_8px_0_#fff] hover:-translate-y-1 hover:shadow-[0_6px_0_#fff]
          active:translate-y-1 active:shadow-[0_3px_0_#fff] transition-all duration-200 uppercase`}
      >
        Book Your No Obligation Admission Call Now
      </a>
    </div>

    {/* Spots bar */}
    <div className="flex justify-center mt-8 px-3">
      <div className="flex gap-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <span
            className={`
              w-1.5 h-3 sm:w-3 sm:h-6
              bg-[#C6AA4F]
              rounded-[2px]
              flex items-center justify-center
            `}
            key={`done-${i}`}
          />
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
      {"HURRY! Only "}
      <span className="text-red-500 font-bold">07</span>
      {" spots left for the Upcoming Batch"}
    </p>
  </section>
);

export default WhyThisProgramWorks;
