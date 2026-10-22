import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Wistia video ids for the success story videos
const videoIds = ["9is5qlbb41", "w3zovhjfhg", "qfs3h0is2q", "dmg57e4dcz", "tf7qjcvyp0", "bt6t3959hp"];
const AUTO_SLIDE_MS = 4000;

function SuccessStories() {
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [spotsLeft] = useState(13);
  const timerRef = useRef(null);

  // Load the Wistia player script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Mobile: show all videos stacked; desktop: paginated carousel
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setPage(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const perPage = 3;
  const totalPages = Math.ceil(videoIds.length / perPage);

  const next = () => {
    setPage((p) => (p + 1) % totalPages);
  };
  const prev = () => {
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  };

  // Auto-advance unless hovered (or on mobile)
  useEffect(() => {
    if (!isMobile && !isHovered) {
      timerRef.current = setInterval(next, AUTO_SLIDE_MS);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isMobile, isHovered, totalPages]);

  const visible = videoIds.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl sm:px-4 px-0">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl text-white sm:text-3xl md:text-6xl font-extrabold mb-14 md:mb-8 leading-snug"
        >
          Success Stories
        </motion.h2>

        {isMobile && (
          <div className="grid gap-8">
            {videoIds.map((id, i) => (
              <div
                className="relative overflow-hidden rounded-2xl border border-yellow-400/40 bg-black shadow-[0_20px_60px_rgba(255,200,80,0.35)]"
                key={i}
              >
                <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                  <div
                    className="wistia_responsive_wrapper"
                    style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}
                  >
                    <div
                      className={`wistia_embed wistia_async_${id} videoFoam=true`}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isMobile && (
          <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-r-full border border-yellow-400/40 bg-black text-2xl text-yellow-400"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-l-full border border-yellow-400/40 bg-black text-2xl text-yellow-400"
            >
              ›
            </button>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  key={page}
                >
                  {visible.map((id, i) => (
                    <div
                      className="relative overflow-hidden rounded-2xl border border-yellow-400/40 bg-black shadow-[0_20px_60px_rgba(255,200,80,0.35)]"
                      key={i}
                    >
                      <div
                        className="wistia_responsive_padding"
                        style={{ padding: "56.25% 0 0 0", position: "relative" }}
                      >
                        <div
                          className="wistia_responsive_wrapper"
                          style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}
                        >
                          <div
                            className={`wistia_embed wistia_async_${id} videoFoam=true`}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        <div className="mt-6 sm:mt-8 flex justify-center">
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
              <span className="w-1.5 h-3 sm:w-3 sm:h-6 bg-[#C6AA4F] rounded-[2px]" key={`done-${i}`} />
            ))}
            <span className="w-1.5 h-3 sm:w-3 sm:h-6 bg-[#C6AA4F] rounded-[2px] animate-pulse" />
            <span className="w-1.5 h-3 sm:w-3 sm:h-6 bg-[#C6AA4F] rounded-[2px] animate-pulse [animation-delay:200ms]" />
            <span className="w-1.5 h-3 sm:w-3 sm:h-6 bg-[#C6AA4F] rounded-[2px] animate-pulse [animation-delay:400ms]" />
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
    </section>
  );
}

export default SuccessStories;
