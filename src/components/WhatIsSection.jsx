import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WhatIsSection = () => {
  // Countdown to midnight. The value is kept up to date every second but is not
  // rendered anywhere in this section at the moment.
  // eslint-disable-next-line no-unused-vars
  const [timeLeft, setTimeLeft] = useState({ h: "00", m: "00", s: "00" });

  useEffect(() => {
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59);

    const timer = setInterval(() => {
      const diff = endOfDay - new Date();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({
        h: String(hours).padStart(2, "0"),
        m: String(minutes).padStart(2, "0"),
        s: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`
        relative overflow-hidden
        py-24 sm:py-20 px-4
        bg-white text-[#131316]
      `}
    >
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#C6AA4F]/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-[#C6AA4F]/10 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`
          relative z-10
          max-w-5xl mx-auto
          rounded-3xl
          border border-[#C6AA4F]/30
          bg-white
          shadow-[0_40px_120px_rgba(198,170,79,0.25)]
          px-2 sm:px-16
          py-16 sm:py-20
          text-center
        `}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold leading-tight"
        >
          What Is The{" "}
          <span className="bg-gradient-to-r from-[#C6AA4F] to-[#8b7638] bg-clip-text text-transparent">
            IELTS Champions Club
          </span>
          ?
        </motion.h2>

        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#C6AA4F] to-[#8b7638]" />

        <div className="mt-10 max-w-3xl mx-auto space-y-4 text-gray-700 text-base sm:text-lg">
          <p>
            {"The "}
            <span className="font-semibold text-black">IELTS Champions Club</span> isn’t another course.
          </p>
          <p>
            {"It’s a results-driven system designed by me "}
            <span className="font-semibold text-black">(CA Ganesh Buguidi)</span>
            {" a certified trainer who has helped hundreds of students cross that magical "}
            <span className="font-semibold text-black">Band 7-8 line using examiner-level</span>
            {" techniques most institutes don’t even know exist."}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className={`
            mt-10 mx-auto max-w-3xl
            rounded-2xl
            border border-[#C6AA4F]/30
            bg-gradient-to-r from-[#C6AA4F]/10 to-transparent
            px-6 sm:px-10 py-6
          `}
        >
          <p className="text-lg sm:text-xl font-semibold text-black">
            This isn’t theory. This is transformation.
          </p>
          <p className="mt-2 text-sm sm:text-lg text-gray-700">
            A step-by-step, proven roadmap that turns your weaknesses into weapons in Reading, Writing,
            Listening, and Speaking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <a
            href="https://calendly.com/ganesh-southwardsielts/30min"
            className={`
              inline-flex items-center justify-center
              px-4 sm:px-14 py-4
              rounded-full
              bg-red-600 
              text-white font-bold
              text-xs sm:text-lg
              shadow-[0_10px_0_#ccc]
              hover:-translate-y-1
              hover:shadow-[0_8px_0_#ccc]
              active:translate-y-1
              active:shadow-[0_4px_0_#ccc]
              transition-all uppercase
            `}
          >
            Book Your No Obligation Admission Call Now
          </a>
        </motion.div>

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
      </motion.div>
    </section>
  );
};

export default WhatIsSection;
