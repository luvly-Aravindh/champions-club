const points = [
  {
    text: (
      <>
        {"I’ve helped "}
        <span className="font-semibold">75,000+ students</span>
        {" jump from "}
        <span className="font-semibold">Band 5.5 to 7+</span>
        {" using these exact strategies, most achieved it on their"}{" "}
        <span className="font-semibold">first try</span>.
      </>
    ),
  },
  {
    text: (
      <>
        <span className="font-semibold">8,500+ students</span>
        {" have scored"} <span className="font-semibold">Band 8 or higher</span>, across Academic and
        General Training modules.
      </>
    ),
  },
  {
    text: (
      <>
        My students have secured{" "}
        <span className="font-semibold">PRs, admissions, and scholarships in 25+ countries</span>, including
        Canada, UK, Australia, and New Zealand.
      </>
    ),
  },
  {
    text: (
      <>
        <span className="font-semibold">Over 1.5 million+ hours</span>
        {" of live IELTS coaching delivered, with consistently high success rates across batches."}
      </>
    ),
  },
];

const WhyTrustSection = () => (
  <div className="bg-white text-black py-10 px-4 sm:px-6 md:px-16 lg:px-32 max-w-7xl mx-auto">
    <h2
      className={`
          text-2xl 
          sm:text-3xl 
          md:text-6xl 
          font-extrabold 
          leading-snug 
          md:leading-tight 
          mb-10 
          bg-gradient-to-r 
          from-[#474646] 
          to-[#000] 
          text-transparent 
          bg-clip-text
        `}
    >
      {"Why Trust Southwards IELTS "}
      <br className="hidden md:block" />
      with Your IELTS Success?
    </h2>

    <div className="space-y-8 md:space-y-10">
      {points.map((point, i) => (
        <div key={i}>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-2 h-6 sm:w-2.5 sm:h-7 bg-black mt-1 rounded-sm" />
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed">{point.text}</p>
          </div>
          <div className="border-b border-neutral-300 mt-4 md:mt-6" />
        </div>
      ))}
    </div>
  </div>
);

export default WhyTrustSection;
