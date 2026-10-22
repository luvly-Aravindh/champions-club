import { motion } from "framer-motion";
import review1 from "../assets/review1.jpeg";
import review2 from "../assets/review2.jpeg";
import review3 from "../assets/review3.jpeg";
import review4 from "../assets/review4.jpeg";
import review5 from "../assets/review5.jpeg";
import review6 from "../assets/review6.jpeg";
import review7 from "../assets/review7.jpeg";
import review8 from "../assets/review8.jpeg";

const reviews = [review1, review2, review3, review4, review5, review6, review7, review8];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function ReviewsSection() {
  return (
    <section className="relative bg-[#1862E3] px-4 sm:px-6 py-8 sm:py-16 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#C6AA4F]/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-[#C6AA4F]/10 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto text-center"
      >
        <h2 className="text-[25px] md:text-4xl font-extrabold text-center text-white mb-10 sm:mb-12 leading-snug max-w-3xl mx-auto">
          See What India’s Saying{" "}
          <span className="bg-[#D2F801] font-extrabold text-black px-1">About Our Fast,</span> Simple Way To
          Crack IELTS Reading
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reviews.map((review, i) => (
            <motion.div
              variants={card}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`
                relative rounded-2xl overflow-hidden
                border border-slate-200
                shadow-lg
                group
              `}
              key={i}
            >
              <img
                src={review}
                alt={`Google review ${i + 1}`}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-[#C6AA4F]/20 via-transparent to-[#C6AA4F]/20 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="https://calendly.com/ganesh-southwardsielts/30min"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`
              inline-flex items-center justify-center
              px-3 sm:px-14 py-4
              rounded-full
              bg-red-600 
              text-white font-bold
              text-xs sm:text-lg
              shadow-[0_10px_0_#ccc]
              transition-all uppercase
            `}
          >
            Book Your No Obligation Admission Call Now
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-[#C6AA4F] font-semibold uppercase text-xs sm:text-base"
        >
          {"Hurry! Only "}
          <span className="text-red-500 font-bold">07</span>
          {" spots left for the upcoming batch"}
        </motion.p>
      </motion.div>
    </section>
  );
}

export default ReviewsSection;
