function StudentReviewsVideo() {
  const today = new Date();
  today.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  // Spots left: starts at 12 on 1 Jan 2026 and drops by one every 4 days, never below 3.
  const totalSpots = 12;
  const minSpots = 3;
  const daysSinceStart = Math.floor((today - new Date("2026-01-01")) / (1000 * 60 * 60 * 24));
  const spotsTaken = Math.floor(daysSinceStart / 4);
  const spotsLeft = Math.max(totalSpots - spotsTaken, minSpots);

  return (
    <section className="w-full flex flex-col items-center bg-white text-gray-900 sm:px-4 px-0 py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-center mx-auto leading-snug md:leading-[70px] max-w-7xl md:px-28">
        See Why Thousands Of Students Are Raving About The IELTS Band 8+ Champions Club Program
      </h1>

      <div className="mt-10 md:mt-14 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md md:max-w-lg overflow-hidden rounded-xl bg-black pb-[56.25%]">
            <iframe
              src="https://fast.wistia.net/embed/iframe/6x4cm9a3g1?seo=false&videoFoam=true"
              title="IELTS Band 8+ Student Reviews"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              playsInline
              className="absolute top-0 left-0 w-full h-full rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-5 md:space-y-6 w-full">
          <p className="text-gray-900 max-w-md md:max-w-xl mx-auto text-base sm:text-lg md:text-xl">
            Real students. Real Band 8+ scores. From 5.5 to 8.5, these are the exact strategies that helped
            thousands crack IELTS and rewrite their future.
          </p>
          <h2 className="text-lg sm:text-xl md:text-4xl font-semibold leading-snug uppercase">
            {"Hear Directly From My "}
            <br />
            {" Band 8+ Champions"}
          </h2>
          <a
            href="https://calendly.com/ganesh-southwardsielts/30min"
            className="inline-block px-4 sm:px-10 py-3 sm:py-4 rounded-full bg-red-600 text-white font-bold text-xs sm:text-lg shadow-[0_8px_0_#ccc] transition-all hover:-translate-y-1 hover:shadow-[0_6px_0_#ccc] active:translate-y-1 active:shadow-[0_3px_0_#ccc] uppercase"
          >
            Book Your No Obligation Admission Call Now
          </a>

          {/* Spots bar */}
          <div className="flex justify-center mt-8 px-3">
            <div className="flex gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <span className="w-1.5 h-3 sm:w-3 sm:h-6 bg-[#C6AA4F] rounded-[2px]" key={`done-${i}`} />
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
            Hurry! Only <span className="text-red-500 font-bold">{spotsLeft.toString().padStart(2, "0")}</span> spots
            left for the upcoming batch
          </p>
        </div>
      </div>
    </section>
  );
}

export default StudentReviewsVideo;
