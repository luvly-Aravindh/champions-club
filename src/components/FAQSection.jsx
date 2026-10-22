import { useState } from "react";
import arrowIcon from "../assets/arrow.svg";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Do I need a minimum band to join this course?",
      a: "No, I’ve structured it to serve learners from around Band 5.5 upward.",
    },
    {
      q: "What if I miss a live class?",
      a: "No, I’ve structured it to serve learners from around Band 5.5 upward.",
    },
    {
      q: "Do you guarantee Band 8?",
      a: "No, I’ve structured it to serve learners from around Band 5.5 upward.",
    },
    {
      q: "Is there a refund policy?",
      a: "No, I’ve structured it to serve learners from around Band 5.5 upward.",
    },
    {
      q: "When will this batch begin?",
      a: "No, I’ve structured it to serve learners from around Band 5.5 upward.",
    },
  ];

  const toggle = (index) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <section className="relative w-full py-20 flex flex-col items-center text-white bg-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#d1b35d]/20 blur-[200px] rounded-full" />
      <h2 className="text-3xl md:text-4xl font-bold relative z-10 text-center">Frequently Asked Questions</h2>

      <div className="relative z-10 mt-12 w-full max-w-3xl bg-[#0f1412]/80 px-8 py-10 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl space-y-3">
        {faqs.map((faq, i) => (
          <div
            className="border-b border-white/10 pb-4 last:border-none cursor-pointer"
            onClick={() => toggle(i)}
            key={i}
          >
            <div className="flex justify-between items-center py-4">
              <p className="text-lg">{faq.q}</p>
              <img
                src={arrowIcon}
                alt="arrow"
                className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? "rotate-180" : "rotate-0"}`}
              />
            </div>
            {openIndex === i && <p className="text-gray-300 text-base leading-relaxed pr-8">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
