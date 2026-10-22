import { FaStar } from "react-icons/fa";
import ananya from "../assets/Ananya.svg";
import kumar from "../assets/Kumar.svg";
import rahul from "../assets/Rahul.svg";
import quoteIcon from "../assets/quote.svg";

const testimonials = [
  {
    text: "Before joining, I was stuck at Band 6.5 for months. Their day-by-day plan and feedback showed me exactly where I was slipping. In just one batch, I hit an overall Band 8...something I’d been chasing for almost a year.",
    name: "Ananya S",
    city: "Bengaluru",
    image: ananya,
  },
  {
    text: "I had given IELTS twice and always fell short in Reading and Writing. This program completely changed my approach. The templates, strategy sheets, and video feedback made everything click. I finally got CLB 9 and filed my Canada PR.",
    name: "Kumar M",
    city: "Ahmedabad",
    image: kumar,
  },
  {
    text: "I used to overthink every writing task and always got a 6.5. Their structured frameworks made it so simple. By the end of the program, I scored a 7.5 in Writing and 8.0 overall. I wish I had joined earlier.",
    name: "Rahul K",
    city: "Pune",
    image: rahul,
  },
];

const Testimonials = () => (
  <div className="bg-black text-white pt-10 pb-14 px-0 sm:px-6 md:px-12 lg:px-12">
    <h2 className="text-center text-2xl sm:text-3xl md:text-6xl font-extrabold mb-14 md:mb-24 leading-snug">
      Real Testimonials
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {testimonials.map((t, i) => (
        <div
          className="bg-neutral-900 rounded-xl p-6 sm:p-8 relative shadow-xl border border-neutral-800"
          key={i}
        >
          <img src={quoteIcon} alt="quote" className="absolute -top-6 right-4 w-10 h-10 sm:w-14 sm:h-14" />
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 mt-4">{t.text}</p>
          <div className="flex gap-1 text-yellow-400 mb-6">
            {[...Array(5)].map((_, s) => (
              <FaStar size={18} key={s} />
            ))}
          </div>
          <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-neutral-700">
            <img src={t.image} alt="Profile" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
            <div>
              <p className="font-semibold text-sm sm:text-base">{t.name}</p>
              <p className="text-xs sm:text-sm text-neutral-400">{t.city}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 flex justify-center">
      <a
        href="https://calendly.com/ganesh-southwardsielts/30min"
        className={`
              inline-flex items-center justify-center
              px-4 sm:px-14 py-4
              rounded-full
              bg-red-600 
              text-white font-bold
              text-xs sm:text-lg
              shadow-[0_10px_0_#fff]
              hover:-translate-y-1
              hover:shadow-[0_8px_0_#fff]
              active:translate-y-1
              active:shadow-[0_4px_0_#fff]
              transition-all uppercase
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
  </div>
);

export default Testimonials;
