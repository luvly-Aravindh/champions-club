const ForYouSection = () => {
  const forYou = [
    <>
      {"You’ve attempted IELTS before and got stuck around "}
      <span className="font-bold text-white">Band 6.0 – 7.0</span>
      {" but are determined to break through."}
    </>,
    <>
      {"You want a "}
      <span className="font-semibold text-white">structured, proven system</span>
      {" not random YouTube tips or generic coaching."}
    </>,
    <>
      {"You’re aiming for "}
      <span className="font-semibold text-white">Band 8+ or CLB 9</span>
      {" for PR, university admission, or career growth."}
    </>,
    <>
      {"You’re ready to "}
      <span className="font-semibold text-white">show up consistently for 25 days</span>, follow the plan,
      and apply feedback.
    </>,
    <>
      {"You value "}
      <span className="font-semibold text-white">expert guidance and clarity</span>
      {" and want to fast-track your results."}
    </>,
  ];

  const notForYou = [
    <>
      {"You’re looking for "}
      <span className="font-semibold text-white">shortcuts</span>
      {" without real effort."}
    </>,
    <>
      {"You expect results without "}
      <span className="font-semibold text-white">attending live sessions</span>
      {" or doing assignments."}
    </>,
    <>
      {"You want "}
      <span className="font-semibold text-white">free or “quick fix” hacks</span>
      {" instead of a structured system."}
    </>,
    <>
      {"You’re not serious about improving and just want to "}
      <span className="font-semibold text-white">“try it out”.</span>
    </>,
    <>
      {"If you read this and thought "}
      <span className="font-semibold text-white">“Yes, that’s me”</span>
      {" then don’t wait."}
    </>,
  ];

  return (
    <section className="w-full bg-black text-white py-10 md:py-16 px-4 font-inter">
      {/* Mobile: stacked lists */}
      <div className="md:hidden space-y-10">
        <div className="bg-[#C6AA4F] text-black font-extrabold text-center py-3 rounded-lg text-sm tracking-wide">
          This Program Is For You If
        </div>
        <div className="space-y-5">
          {forYou.map((item, i) => (
            <div
              className="p-4 rounded-lg bg-[#111111] border border-[#ffffff20] text-gray-300 text-sm leading-relaxed"
              key={i}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="bg-[#C6AA4F] text-black font-extrabold text-center py-3 rounded-lg text-sm tracking-wide">
          This Program Is NOT For You If
        </div>
        <div className="space-y-5">
          {notForYou.map((item, i) => (
            <div
              className="p-4 rounded-lg bg-[#111111] border border-[#ffffff20] text-gray-300 text-sm leading-relaxed"
              key={i}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: two-column table */}
      <div className="hidden md:block">
        <div className="max-w-4xl mx-auto border border-[#ffffff25] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="bg-[#C6AA4F] text-black py-5 text-center font-bold text-lg">
              This Program Is For You If
            </div>
            <div className="bg-[#C6AA4F] text-black py-5 text-center font-bold text-lg border-l border-[#00000040]">
              This Program Is NOT For You If
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-[#ffffff25]" />
            {forYou.map((item, i) => (
              <div className="relative" key={i}>
                <div className="grid grid-cols-2">
                  <div className="p-10 bg-white/5 border-r border-[#C6AA4F40] text-gray-200 leading-relaxed">
                    {item}
                  </div>
                  <div className="p-10 text-gray-300 leading-relaxed">{notForYou[i]}</div>
                </div>
                {i !== forYou.length - 1 && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ffffff40] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
