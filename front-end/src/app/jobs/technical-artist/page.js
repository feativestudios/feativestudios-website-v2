"use client";
import Link from "next/link";

const TechnicalArtistJob = () => {
  return (
    <div className="font-arca bg-black text-white min-h-screen">
      <section className="container mx-auto max-w-4xl px-6 py-20">
        {/* Back Button */}
        <Link href="/about" className="inline-flex items-center text-gray-400 hover:text-white mb-8 font-jost">
          <span className="mr-2">←</span> Back
        </Link>

        {/* Job Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-wider uppercase mb-4">
            Technical Artist
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

        {/* About Us Section */}
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

        {/* About the Role Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            About the Role
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed space-y-4">
            <p>
              Feative Studios is seeking a talented Technical Artist who is passionate about 
              implementing cutting-edge graphical and functional elements in Unreal Engine 5. You'll be 
              the bridge between art and tech, bringing creative ideas to life end-to-end, from 
              conception to execution. A big plus if you're adept at coding and scripting.
            </p>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Key Responsibilities
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>Develop and implement advanced shaders and materials in Unreal Engine 5</li>
              <li>Create and optimize visual effects (VFX) for gameplay and cinematic sequences</li>
              <li>Bridge the gap between art and programming teams through technical solutions</li>
              <li>Optimize rendering performance while maintaining visual quality</li>
              <li>Collaborate with artists to establish efficient art pipelines and workflows</li>
              <li>Implement procedural generation systems for environments and assets</li>
              <li>Create tools and scripts to streamline the art production process</li>
              <li>Troubleshoot and resolve technical art-related issues</li>
            </ul>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Requirements
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>3+ years of experience as a Technical Artist in game development</li>
              <li>Expert knowledge of Unreal Engine 5 and its rendering pipeline</li>
              <li>Strong proficiency in shader development and material creation</li>
              <li>Experience with Blueprint scripting and C++ programming</li>
              <li>Solid understanding of 3D graphics, lighting, and rendering techniques</li>
              <li>Proficiency in DCC tools like Maya, 3ds Max, or Blender</li>
              <li>Experience with version control systems (Perforce, Git)</li>
              <li>Strong problem-solving skills and attention to detail</li>
              <li>Excellent communication and collaboration skills</li>
            </ul>
          </div>
        </div>

        {/* Preferred Qualifications */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Preferred Qualifications
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>Experience with real-time ray tracing and advanced lighting techniques</li>
              <li>Knowledge of procedural content generation tools (Houdini, World Machine)</li>
              <li>Familiarity with performance profiling and optimization tools</li>
              <li>Experience with mobile game development and optimization</li>
              <li>Background in VR/AR development</li>
              <li>Portfolio demonstrating technical art skills and shipped projects</li>
            </ul>
          </div>
        </div>

        {/* Apply Button */}
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

export default TechnicalArtistJob;
