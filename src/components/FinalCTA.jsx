import footerLogo from "../assets/footer-logo.svg";

function FinalCTA() {
  return (
    <section className="w-full bg-black text-white py-16 sm:py-20 sm:px-4 px-0">
      <h2 className="text-center text-3xl sm:text-6xl font-extrabold mb-8 sm:mb-10 leading-snug">
        Your Moment to Decide
      </h2>

      <div className="text-center text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed space-y-4 px-2">
        <p>You've tried the “usual routes” scattered tips, random courses, no structure.</p>
        <p>
          This 25-day course is different. It’s not about doing more, it’s about doing the right things,
          with coaching, feedback, and accountability.
        </p>
        <p>
          {"If you’re serious about "}
          <span className="text-[#C6AA4F]">achieving Band 8</span>, let’s talk.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <a
          href="https://calendly.com/ganesh-southwardsielts/30min"
          className={`px-4 sm:px-10 py-3 sm:py-4 rounded-full bg-red-600  text-black font-bold 
                     text-xs sm:text-lg shadow-[0_8px_0_#fff] transition-all duration-200
                     hover:-translate-y-1 hover:shadow-[0_6px_0_#fff]
                     active:translate-y-1 active:shadow-[0_3px_0_#fff] text-white uppercase`}
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

      {/* Footer */}
      <div className="mt-14 sm:mt-8 text-center text-gray-400 text-xs sm:text-sm space-y-4">
        <hr
          className={`max-w-[90%] sm:max-w-5xl mx-auto border-0 h-[2px]
                       bg-gradient-to-r from-transparent via-white to-transparent opacity-60`}
        />
        <img src={footerLogo} alt="Southwards IELTS" className="mx-auto w-28 sm:w-36 opacity-80 mt-12" />
        <p className="text-xs sm:text-base">COPYRIGHT 2025 | SOUTHWARDS IELTS PVT LTD</p>
      </div>
    </section>
  );
}

export default FinalCTA;
