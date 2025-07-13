import { useEffect, useRef } from "react";
import Typed from "typed.js";

function AboutUs() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "We don't follow events — we anticipate them. Our systems are designed to capture the invisible shifts before they become visible headlines.",
        "Every actor, every region, every risk is unique. We reject one-size-fits-all models and build intelligence tools tailored to specific realities.",
        "Geopolitical meaning is not static. Our indices evolve based on the user's perspective, objective, sector, and geographic focus — because impact is always relative.",
        "We don't rely blindly on automation. We guide AI with geopolitical expertise, making it focused, interpretable, and grounded in what matters.",
        "We uphold neutrality and transparency. Our insights are unbiased, our logic is explainable, and our systems are not tied to political narratives.",
        "In a fast-moving world, speed is crucial — but not at the cost of depth. Our models balance real-time updates with structured analysis that adds lasting value.",
        "Our intelligence is built around you. Whether you're a policymaker, investor, security strategist, or humanitarian actor — we tailor insight to your mission. "
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" id="about_us">
      <div className="relative w-[99%] max-w-8xl h-[700px] md:h-[650px] rounded-t-2xl rounded-b-2xl overflow-hidden shadow-lg">
        
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="AboutUs.mp4" type="video/mp4" />
          Your web browser does not tolerate videos
        </video>

        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-stone-50 px-6 py-2 rounded-md shadow-md text-zinc-900 text-2xl md:text-5xl font-semibold z-10 opacity-70">
          About Us
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="bg-stone-50 px-10 py-5 rounded-md shadow-md text-zinc-900 text-sm md:text-xl opacity-80 max-w-4xl text-center">
            <span ref={typedRef}></span>
          </div>

          <div className="mt-6 flex items-center bg-white rounded-sm shadow-md overflow-hidden w-full max-w-lg opacity-90">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
              required
              readOnly
            />
            <button
              type="button"
              className="bg-neutral-700 hover:bg-neutral-800 text-gray-300 px-2 py-2 flex items-center justify-center gap-2 font-semibold"
              onClick={() => window.open('https://forms.office.com/r/3dBK96zBWf', '_blank')}
            >
              Subscribe
            </button>
          </div>


          {/*<form className="mt-6 flex items-center bg-white rounded-sm shadow-md overflow-hidden w-full max-w-lg opacity-90">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
              required
              readOnly
            />
            <button
              type="submit"
              className="bg-neutral-700 hover:bg-neutral-800 text-gray-300 px-2 py-2 flex items-center justify-center gap-2 font-semibold"
            >
              Subscribe
            </button>
          </form>*/}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
