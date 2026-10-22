import timesLogo from "../assets/times.svg";
import hindustanLogo from "../assets/hindustan.svg";
import theHinduLogo from "../assets/thehindu.svg";
import ieltsLogo from "../assets/ielts.png";
import indianExpressLogo from "../assets/indianexpress.svg";
import edtechLogo from "../assets/edtech.png";

const IntroSection = () => (
  <section className="w-full bg-black rota89 text-white font-inter">
    <h2 className="text-center text-[28px] sm:text-[50px] font-extrabold leading-tight mb-10 bg-gradient-to-r from-[#C6AA4F] to-[#C6AA4F] text-transparent bg-clip-text">
      The IELTS Champions Club
      <br />
      {"“Where Average Test Takers Become "}
      <br />
      {" Band 8+ Champions.”"}
    </h2>

    <div className="max-w-3xl mx-auto px-4 mt-16">
      <h3 className="text-xl sm:text-2xl font-bold mb-6">Before You Read Another Word…</h3>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">Let’s be honest.</p>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
        You’ve probably taken a few mock tests, watched endless YouTube videos, or maybe even joined an
        IELTS class where the trainer just reads slides and repeats templates.
      </p>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
        But deep down, you know that’s not what gets you a Band 8 or above.
      </p>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">It’s not about luck.</p>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
        It’s about mastering the exam like a pro who knows exactly how examiners think.
      </p>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
        And that’s exactly what happens inside the IELTS Champions Club.
      </p>
    </div>

    <div className="text-center mt-10">
      <a
        href="https://calendly.com/ganesh-southwardsielts/30min"
        className={`
            inline-block mx-auto
            text-white font-bold 
            text-sm sm:text-xl 
            px-2 py-3 sm:px-10 sm:py-4 
            mt-8 rounded-full 
            bg-red-600 
            shadow-[0_8px_0_#fff]
            hover:shadow-[0_6px_0_#fff] 
            hover:-translate-y-1
            active:shadow-[0_3px_0_#fff]
            active:translate-y-1
            transition-all duration-200
          `}
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

    {/* Press logos marquee */}
    <div className="w-full bg-[#C6AA4F] py-4 overflow-hidden mt-8 mb-0">
      <div className="flex items-center gap-10 animate-slide">
        <img src={timesLogo} className="h-10 w-auto" alt="Times of India" />
        <img src={hindustanLogo} className="h-10 w-auto" alt="Hindustan Times" />
        <img src={theHinduLogo} className="h-10 w-auto" alt="The Hindu" />
        <img src={ieltsLogo} className="h-10 w-auto" alt="IELTS Blog" />
        <img src={indianExpressLogo} className="h-10 w-auto" alt="The Indian Express" />
        <img src={edtechLogo} className="h-10 w-auto" alt="EdTech Review" />
        <img src={timesLogo} className="h-10 w-auto" alt="Times of India" />
        <img src={hindustanLogo} className="h-10 w-auto" alt="Hindustan Times" />
        <img src={theHinduLogo} className="h-10 w-auto" alt="The Hindu" />
        <img src={ieltsLogo} className="h-10 w-auto" alt="IELTS Blog" />
        <img src={indianExpressLogo} className="h-10 w-auto" alt="The Indian Express" />
        <img src={edtechLogo} className="h-10 w-auto" alt="EdTech Review" />
      </div>
    </div>
  </section>
);

export default IntroSection;
