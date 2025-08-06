"use client";
import Link from "next/link";

const AudioDesignerJob = () => {
  return (
    <div className="font-arca bg-black text-white min-h-screen">
      <section className="container mx-auto max-w-4xl px-6 py-20">
        <Link href="/about" className="inline-flex items-center text-gray-400 hover:text-white mb-8 font-jost">
          <span className="mr-2">←</span> Back
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-wider uppercase mb-4">
            Audio Designer
          </h1>
          <p className="text-gray-400 text-lg font-jost mb-6">Remote</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 font-jost">Job Type</span>
              <span className="text-white font-medium">Full Time</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 font-jost">Workspace</span>
              <span className="text-white font-medium">Remote / On-site</span>
            </div>
          </div>

          <Link href="/job-apply">
            <button className="bg-bitterSweet hover:bg-bitterSweet/60 text-white px-8 py-3 rounded font-arca text-lg tracking-wider uppercase transition-colors">
              Apply Now
            </button>
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            About Us
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed space-y-4">
            <p>
              At Feative Studios, we are redefining the future of gaming by building a diverse portfolio 
              of micro-AAA games that leverage shared technology, resources, and an interconnected 
              player community. Unlike traditional mega AAA studios that rely on a single flagship IP, 
              our vision is to create multiple, interconnected IPs that together form a cohesive and 
              scalable gaming ecosystem. Each game's success amplifies the others, compounding 
              growth and enhancing the player experience across our titles. Our ultimate goal is to 
              become the premier destination for millions of players transitioning to more sophisticated 
              gaming environments, delivering seamless cross-game features like shared quests, social 
              interactions, and interoperable rewards.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            About the Role
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed space-y-4">
            <p>
              We are seeking a creative Audio Designer to craft immersive soundscapes and audio 
              experiences that bring our games to life. You will be responsible for creating, 
              implementing, and optimizing all aspects of game audio including sound effects, 
              ambient audio, and interactive audio systems. This role requires both technical 
              expertise and creative vision to enhance player immersion across our game portfolio.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Key Responsibilities
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>Design and create high-quality sound effects for gameplay, UI, and environments</li>
              <li>Develop and implement interactive audio systems using game engines</li>
              <li>Create ambient soundscapes and environmental audio</li>
              <li>Collaborate with composers to integrate music seamlessly with sound design</li>
              <li>Implement and optimize audio systems for multiple platforms</li>
              <li>Work with voice actors and manage voice recording sessions</li>
              <li>Create audio implementation documentation and guidelines</li>
              <li>Optimize audio performance and memory usage across platforms</li>
              <li>Stay current with audio technology trends and tools</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Requirements
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>3+ years of experience in game audio design and implementation</li>
              <li>Proficiency in audio middleware (Wwise, FMOD) and game engines</li>
              <li>Strong skills in audio editing software (Pro Tools, Reaper, Audition)</li>
              <li>Experience with field recording and sound synthesis</li>
              <li>Understanding of interactive audio systems and real-time audio processing</li>
              <li>Knowledge of audio optimization techniques for games</li>
              <li>Experience with scripting languages for audio implementation</li>
              <li>Strong portfolio demonstrating game audio work</li>
              <li>Excellent communication and collaboration skills</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Preferred Qualifications
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>Experience with Unreal Engine 5 audio systems and Blueprint scripting</li>
              <li>Knowledge of 3D spatial audio and VR/AR audio implementation</li>
              <li>Familiarity with procedural audio generation techniques</li>
              <li>Experience with mobile audio optimization and platform-specific requirements</li>
              <li>Background in music composition or sound engineering</li>
              <li>Understanding of psychoacoustics and audio perception</li>
              <li>Degree in Audio Engineering, Music Technology, or related field</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href="/job-apply">
            <button className="bg-bitterSweet hover:bg-bitterSweet/60 text-white px-12 py-4 rounded font-arca text-xl tracking-wider uppercase transition-colors">
              Apply Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AudioDesignerJob;
