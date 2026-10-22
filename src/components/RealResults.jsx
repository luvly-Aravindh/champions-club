import { motion } from "framer-motion";
import r1 from "../assets/r1.jpeg";
import r2 from "../assets/r2.jpeg";
import r3 from "../assets/r3.jpeg";
import r4 from "../assets/r4.jpeg";
import r5 from "../assets/r5.jpeg";
import r6 from "../assets/r6.jpeg";
import r7 from "../assets/r7.jpeg";

const results = [r1, r2, r3, r4, r5, r6, r7];

const RealResults = () => (
  <section className="relative py-20 bg-black overflow-hidden">
    <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#C6AA4F]/20 blur-[140px] rounded-full" />
    <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-[#C6AA4F]/10 blur-[140px] rounded-full" />

    <div className="relative max-w-7xl mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          Real Students.<span className="block text-[#C6AA4F] mt-2">Real Results.</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Proof that disciplined preparation and the right strategy produce consistent top ranks.
        </p>
      </div>

      {/* Score card collage */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 space-y-5 md:space-y-0 md:gap-6">
        <div className="space-y-4">
          {[results[6], results[5]].map((src, i) => (
            <div className="overflow-hidden" key={i}>
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            </div>
          ))}
        </div>
        <div className="col-span-2 sm:row-span-2 row-span-1 overflow-hidden">
          <img
            src={results[3]}
            alt=""
            className={`
      w-full h-full object-contain
      rounded-2xl
      hover:scale-105 transition duration-700
    `}
          />
        </div>
        <div className="space-y-4">
          {[results[1], results[4]].map((src, i) => (
            <div className="overflow-hidden" key={i}>
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
            </div>
          ))}
        </div>
        <div className="col-span-2 md:col-span-1 overflow-hidden">
          <img
            src={results[2]}
            alt=""
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>
        <div className="col-span-2 md:col-span-1 overflow-hidden">
          <img
            src={results[0]}
            alt=""
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <a
          href="https://calendly.com/ganesh-southwardsielts/30min"
          className={`
              inline-flex items-center justify-center
              px-10 sm:px-16 py-4
              rounded-full
              bg-red-600 
              text-white font-bold
              text-xs sm:text-lg
              shadow-[0_12px_0_#fff]
              hover:-translate-y-1
              hover:shadow-[0_8px_0_#fff]
              active:translate-y-1
              active:shadow-[0_4px_0_#fff]
              transition-all uppercase
            `}
        >
          Book Your No Obligation Admission Call Now
        </a>

        <div className="flex justify-center mt-12">
          <div className="flex gap-1">
            {[...Array(7)].map((_, i) => (
              <span className="w-2 h-6 bg-[#C6AA4F] rounded-sm" key={i} />
            ))}
            <span className="w-2 h-6 bg-[#C6AA4F] animate-pulse rounded-sm" />
            {[...Array(14)].map((_, i) => (
              <span className="w-2 h-6 bg-gray-600 rounded-sm" key={i} />
            ))}
          </div>
        </div>
        <p className="mt-6 text-[#C6AA4F] font-semibold uppercase text-xs sm:text-base px-4 max-w-3xl mx-auto">
          {"Hurry! Only "}
          <span className="text-red-500 font-bold">07</span>
          {" spots left for the upcoming batch"}
        </p>
      </motion.div>
    </div>
  </section>
);

export default RealResults;
