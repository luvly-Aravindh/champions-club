import listeningIcon from "../assets/listening.svg";
import readingIcon from "../assets/reading.svg";
import writingIcon from "../assets/writing.svg";
import speakingIcon from "../assets/speaking.svg";
import mockTestsIcon from "../assets/mock-tests.svg";
import feedbackIcon from "../assets/feedback.svg";

const JourneySection = () => (
  <section className="w-full bg-black text-white py-20 sm:px-4 px-auto font-inter">
    <h2 className="text-center text-[25px] sm:text-5xl font-extrabold mb-16">
      What’s Inside the 25-Day Journey
    </h2>

    <div className="max-w-6xl mx-auto relative">
      <div className="hidden sm:block absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#d7b954] to-transparent" />
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 border-b border-[#c6aa4f65]">
          <div className="flex items-center gap-3 mb-2">
            <img src={listeningIcon} className="h-8 w-8" />
            <h3 className="text-xl font-bold">Listening</h3>
          </div>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">
            Master all 9 question types, predict paraphrases, spot distractors, sharpen focus
          </p>
        </div>

        <div className="p-8 border-b border-[#c6aa4f65]">
          <div className="flex items-center gap-3 mb-2">
            <img src={readingIcon} className="h-8 w-8" />
            <h3 className="text-xl font-bold">Reading</h3>
          </div>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">
            Handle all 12 question types, improve scanning & inference, finish sections in time
          </p>
        </div>

        <div className="p-8 border-b border-[#c6aa4f65]">
          <div className="flex items-center gap-3 mb-2">
            <img src={writingIcon} className="h-8 w-8" />
            <h3 className="text-xl font-bold">Writing Task 2</h3>
          </div>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">
            Write essays the way IELTS examiners expect not what random tutors tell you, generate ideas in
            under 60 seconds, develop logical structure & vocabulary.
          </p>
        </div>

        <div className="p-8 border-b border-[#c6aa4f65]">
          <div className="flex items-center gap-3 mb-2">
            <img src={writingIcon} className="h-8 w-8" />
            <h3 className="text-xl font-bold">Writing Task 1</h3>
          </div>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">
            Learn to structure reports & letters, highlight trends & comparisons
          </p>
        </div>

        <div className="p-8 border-b border-[#c6aa4f65]">
          <div className="flex items-center gap-3 mb-2">
            <img src={speakingIcon} className="h-8 w-8" />
            <h3 className="text-xl font-bold">Speaking</h3>
          </div>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">
            Build fluency & coherence across Parts 1-3, learn high-band response patterns
          </p>
        </div>

        <div className="p-8 border-b border-[#c6aa4f65]">
          <div className="flex items-center gap-3 mb-2">
            <img src={mockTestsIcon} className="h-8 w-8" />
            <h3 className="text-xl font-bold">Mock Tests + Drills</h3>
          </div>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">
            Regular timed tests, targeted sectional practice, realistic exam simulations
          </p>
        </div>

        <div className="p-8 border-b border-[#c6aa4f65]">
          <div className="flex items-center gap-3 mb-2">
            <img src={feedbackIcon} className="h-8 w-8" />
            <h3 className="text-xl font-bold">Feedback</h3>
          </div>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">
            1-on-1 writing & speaking evaluations through videos, daily doubt clearing
          </p>
        </div>

        <div className="p-8 border-b border-[#c6aa4f65]">
          <h3 className="text-xl font-bold mb-2">You’ll also get:</h3>
          <ul className="mt-2 space-y-2 text-gray-300 text-sm sm:text-base">
            <li>• Recorded sessions for every class</li>
            <li>• Curated worksheets, model answers & strategy sheets</li>
            <li>• Daily homework & performance tracking</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex justify-center mt-14">
      <a
        href="https://calendly.com/ganesh-southwardsielts/30min"
        className="inline-block bg-red-600  text-white font-bold text-xs sm:text-xl sm:px-10 px-4 py-4 rounded-full shadow-[0_8px_0_#fff] hover:-translate-y-1 transition-all duration-200 uppercase"
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
  </section>
);

export default JourneySection;
